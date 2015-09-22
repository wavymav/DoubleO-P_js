document.addEventListener('DOMContentLoaded', function() {
	// Song constructor properties
	function Song(title, artist, duration, isPlaying) {
	 this.title = title;
	 this.artist = artist;
	 this.duration = duration;
	 this.isPlaying = isPlaying;
	}

	// Song Methods
	Song.prototype.play = function() {

	};

	Song.prototype.stop = function() {

	};

	Song.prototype.toHTML = function() {

	};

	//  ===========================================================

	// Playlist constructor properties
	function Playlist(songs, nowPlaying ) {
		this.songs = songs;
		this.nowPlaying = nowPlaying;
	}

	// Playlist Methods
	Playlist.prototype.add = function() {

	};

	Playlist.prototype.play = function() {

	};

	Playlist.prototype.next = function() {

	};

	Playlist.prototype.stop = function() {

	};

	Playlist.prototype.renderElement = function() {

	};
});
