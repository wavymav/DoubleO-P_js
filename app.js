document.addEventListener('DOMContentLoaded', function() {
	// Song constructor properties
	function Song(title, artist, duration, isPlaying) {
	 this.title = title;
	 this.artist = artist;
	 this.duration = duration;
	 this.isPlaying = false;
	}

	// Song Methods

	// Changes the boolean value of the Song current object to true
	Song.prototype.play = function() {
		this.isPlaying = true;
	};

	// Changes the boolean value of the Song current object to false
	Song.prototype.stop = function() {
		this.isPlaying = false;
	};

	// Stores the property values of each Song cronstructor instance in songTemplate
	Song.prototype.toHTML = function() {
		var songTemplate = '<tr';

		if (this.isPlaying) {
				songTemplate += ' class="success"';
		}

		songTemplate +=	'>' +
									'<td>' + this.title + '</td>' +
									'<td>' + this.artist + '</td>' +
									'<td>' + this.duration + '</td>' +
								'</tr>';

		return songTemplate;
	};

	//  ===========================================================

	// Playlist constructor properties
	function Playlist() {
		this.songs = [];
		this.nowPlaying = 0;
	}

	// Playlist Methods

	// Adds a Song object to the end of the Playlist songs []
	Playlist.prototype.add = function(song) {
		this.songs.push(song);
	};

	// Access the Song object in the Playlist songs[] using the nowPlaying index number
	// Then calls the play method on the stored Song Object in currentSong var
	Playlist.prototype.play = function() {
		var currentSong = this.songs[this.nowPlaying];
		currentSong.play();
	};

	// Access the Song object in the Playlist songs[] using the nowPlaying index number
	// Then calls the stop method on the stored Song Object in currentSong var
	Playlist.prototype.stop = function() {
		var currentSong = this.songs[this.nowPlaying];
		currentSong.stop();
	};

	// The next method will call the stop method on the stored Song object
	// Then increment by 1 up the []
	// IF the nowPlaying [] is equal to the number of songs
	// THEN nowPlaying will be reset to 0
	// After the play method will be invoked
	Playlist.prototype.next = function() {
		this.stop();
		this.nowPlaying++;
		if (this.nowPlaying === this.songs.length) {
			this.nowPlaying = 0;
		}
		this.play();
	};

	// The renderElement constructor method takes an element as a param
	Playlist.prototype.renderElement = function(playlistData) {
		// sets the innerHTML of the element to an empty string
		playlistData.innerHTML = "";

		// iterates over the length of the songs[]
		// calling the .toHTML() constructor method on each songs item
		for (var i = 0; i < this.songs.length; i++) {
			playlistData.innerHTML += this.songs[i].toHTML();
		}
	};


	// ============================================================
	// Creating instances

	// Creating a new instance of the Playlist constructor
	var summerPlaylist = new Playlist();

	// Creating new Song intances
	var	trashMan = new Song('Trash Man', 'Jimi Hendrix', '8:15'),
			gumbo = new Song('Gumbo', 'Jay Rock', '4:30'),
			nightcrawler = new Song('Nightcrawler', 'Travis $cott', '3:13');

	// Using the the .add() constructor method to push the new created songs to the songs []
	summerPlaylist.add(trashMan);
	summerPlaylist.add(gumbo);
	summerPlaylist.add(nightcrawler);

	// Grabs the <tbody> element by the id of 'playlist' and stores it in playlistElement
	var playlistElement = document.getElementById('playlist');

	// Calls the summerPlaylist constructor method renderElement() on playlistElement
	summerPlaylist.renderElement(playlistElement);

	// Grabing the buttons by id
	var playButton = document.getElementById('play'),
			stopButton = document.getElementById('stop'),
			forwardButton = document.getElementById('forward');


	// Button Event listeners
	playButton.addEventListener('click', function() {
		summerPlaylist.play();
		summerPlaylist.renderElement(playlistElement);
	});

	stopButton.addEventListener('click', function() {
		summerPlaylist.stop();
		summerPlaylist.renderElement(playlistElement);
	});

	forwardButton.addEventListener('click', function() {
		summerPlaylist.next();
		summerPlaylist.renderElement(playlistElement);
	});



});
