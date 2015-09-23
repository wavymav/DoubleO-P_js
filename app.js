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

	Song.prototype.toHTML = function() {

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
		this.currentSong++;
		if (this.nowPlaying === this.songs.length) {
			this.nowPlaying = 0;
		}
		this.play();
	};

	Playlist.prototype.renderElement = function() {

	};
});

// ============================================================
// Creating instances

// Creating a new instance of the Playlist constructor
var summerPlaylist = new Playlist();

var	trashMan = new Song('Trash Man', 'Jimi Hendrix', '8:15'),
		gumbe = new Song('Gumbo', 'Jay Rock', '4:30'),
		nightcrawler = new Song('Nightcrawler', 'Travis $cott', '3:13');
