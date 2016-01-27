 // neeed to make this all an object jukebox
var jukebox = {
	songList: ["Patience.mp3","Dont_Slow_Down.mp3","Roulette.mp3","Settler.mp3"],
	songName: ["Patience ","Don't Slow down ","Roulette ","Settler "],
	artist: ["Guns N Roses", "Matt & Kim", "System of a Down","Balmorhea" ],

	mediaPlayer: document.getElementById('player'),

	curNum: 0,// counter to use with audio controls

	
	
	progress: function(){
		var progressB = document.getElementById('progress');
		progressB.setAttribute("value", this.mediaPlayer.currentTime);
		document.getElementById('time').innerHTML = this.mediaPlayer.currentTime;
	},

	mediaPlayer: addEventListener("timeupdate",progress),


	// auto plays the next sone on the completion of the audio file.
	// autoPlay: document.getElementById('player').addEventListener('ended',next),


	play: function(){
		// uses the .play() method on the audio player
		document.getElementById('player').play();

		// shows the the song name and artist on the web page via DOM manipulation. Uses hard coded arrays to pull data.
		document.getElementById('info').innerHTML= this.songName[this.curNum] + " by: " + this.artist[this.curNum];
	},

	pause: function(){
		document.getElementById('player').pause();
	},

	next: function(){
		this.curNum++ // on next button curNum is +1 and then used to bring out song in audio player. if the number is higher than the array length the curNum gets set back to 0.
		if (this.curNum > this.songList.length -1){
			this.curNum = 0;
		}

		// swaps the src of the audio player to the next item in the array using curNum.
		document.getElementById('player').setAttribute("src", this.songList[this.curNum]);
		this.play();
	},

	prev: function(){
		this.curNum-- // minuses number in the count to go to the previous songs 

		// if the curNum is less than 0 make curNum equal the array length.
		if (this.curNum < 0){
			this.curNum = this.songList.length -1;
		}
		document.getElementById('player').setAttribute("src", this.songList[this.curNum]);
		this.play();
	},

	volumeUp: function(){
		document.getElementById('player').volume+=0.1;
	},

	volumeDown: function(){
		document.getElementById('player').volume-=0.1;
	},

	 selection: function(){
		var v = document.getElementById('selector').value;// returns a value from the sect html tag
		this.curNum = +v;// converts the string to number and sets it as the curNum

		// sets the src of the audio player to the value returned by the select tag. 
		document.getElementById('player').setAttribute("src", this.songList[this.curNum]);
		this.play();// calls the play function which plays audio and displays song, artist info

	},

	// allows addition of image url , name and artist. All get pushed to it's corresponding arrays
	 addSong: function(){
		var songUrl = document.getElementById('upload_url').value;
		var songName = document.getElementById('upload_name').value;
		var artistN = document.getElementById('upload_artist').value;
		this.songList.push(songUrl);
		this.songName.push(songName);
		this.artist.push(artistN);

		var selector = document.getElementById('selector'); // selects the select tag in doc

		// creates a new option html tag
		var option = document.createElement('option');
		// assigns the text of option to be the last item in songName array.
		option.text = this.songName[this.songName.length -1];
		// assigns the value to the last index ins songName array
		option.value = this.songName.length -1;
		// adds and option to the select tag specified in selector variable.
		selector.add(option);
	}
}

