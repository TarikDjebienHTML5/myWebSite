/**
 * Music Player JS NameSpace
 * Author : Djebien tarik
 * version : 04/08/2013
 */
var music = {
		
		currentStick : null,
		defaultVolume : 0.5,
		full : true,
		
		/*
		 * music audio component initializer
		 */
		init : function() {
			this.currentStick = document.querySelector('#stick5');
			$(this.currentStick).css('background-color', '#149BDF');
			$(this.currentStick).prevAll().css('background-color', '#149BDF');
			var player = document.querySelector('#audioPlayer')
			player.volume = this.defaultVolume;
		},
		
		/*
		 * set display / hide music player
		 */
		setToggleAnimation : function() {
			$('#displayButton').on("click",function () {
			    $("#divPlayer").toggle(700, function(){
			    	if(music.full){
			    		$('#displayButton').html('<i class="icon-resize-full"></i>');
			    		music.full = !music.full;
			    	}else{
			    		$('#displayButton').html('<i class="icon-resize-small"></i>');
			    		music.full = !music.full;
			    	}
			    });
			});
			$('#displayButton').click();
		},
		
		/* Play the music
		 * @param idPlayer the audio player id
		 * @param control the button play
		 */
		play : function(idPlayer, control) {
			var player = document.querySelector('#' + idPlayer);

			if (player.paused) {
				player.play();
				$(control).html('<i class="icon-pause"></i>');
			} else {
				player.pause();	
				$(control).html('<i class="icon-play"></i>');
			}
		},

		/* Stop the music
		 * @param idPlayer the audio player id
		 */
		resume : function (idPlayer) {
			var player = document.querySelector('#' + idPlayer);

			player.currentTime = 0;
			player.pause();
			$('#playButton').html('<i class="icon-play"></i>');
		},
		
		/* Increase the volume
		 * @param idPlayer the audio player id
		 */
		volumeInc : function (idPlayer) {
			var player = document.querySelector('#' + idPlayer);
			try {
				player.volume += 0.1;
			} catch(err) {
				player.volume = 1;
			} finally {
				this.addStick();
			}
		},
		
		/* Add a volume stick
		 */
		addStick : function () {
			if ($(this.currentStick).next().length > 0) {
				$(this.currentStick).next().css('background-color', '#149BDF');
				this.currentStick = $(this.currentStick).next();
			}
		},
		
		/* Decrease the volume
		 * @param idPlayer the audio player id
		 */
		volumeDec : function (idPlayer) {
			var player = document.querySelector('#' + idPlayer);
			try {
				player.volume -= 0.1;
			} catch(err) {
				player.volume = 0;
			} finally {
				this.removeStick();
			}
		},
		
		/* Remove a volume stick
		 */
		removeStick : function () {
			if ($(this.currentStick).prev().length > 0){
				$(this.currentStick).css('background-color', '#EBEBEB');
				this.currentStick = $(this.currentStick).prev();
				$(this.currentStick).css('background-color', '#149BDF');
			}
		},

		update : function (player) {
			var duration = player.duration;    // Durée totale
			var time     = player.currentTime; // Temps écoulé
			var fraction = time / duration;
			var percent  = Math.ceil(fraction * 100);

			var progress = document.querySelector('#progressBar');

			progress.style.width = percent + '%';
			progress.textContent = percent + '%';

			document.querySelector('#progressTime').textContent = this.formatTime(time);
		},

		/* Set music time format
		 */
		formatTime : function (time) {
			var hours = Math.floor(time / 3600);
			var mins  = Math.floor((time % 3600) / 60);
			var secs  = Math.floor(time % 60);

			if (secs < 10) {
				secs = "0" + secs;
			}

			if (hours) {
				if (mins < 10) {
					mins = "0" + mins;
				}

				return hours + ":" + mins + ":" + secs; // hh:mm:ss
			} else {
				return mins + ":" + secs; // mm:ss
			}
		},

		/* Manage forward / backward
		 */
		clickProgress : function (idPlayer, control, event) {
			var parent = this.getPosition(control);    // La position absolue de la progressBar
			var target = this.getMousePosition(event); // L'endroit du la progressBar où on a cliqué
			var player = document.querySelector('#' + idPlayer);

			var x = target.x - parent.x;
			var y = target.y - parent.y;

			var wrapperWidth = document.querySelector('#progressBarControl').offsetWidth;

			var percent  = Math.ceil((x / wrapperWidth) * 100);
			var duration = player.duration;

			player.currentTime = (duration * percent) / 100;
		},

		getMousePosition : function (event) {
			if (event.pageX) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			} else {
				return { 
					x: event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, 
					y: event.clientY + document.body.scrollTop  + document.documentElement.scrollTop
				};
			}
		},

		getPosition : function (element) {
			var top = 0, left = 0;

			while (element) {
				left   += element.offsetLeft;
				top    += element.offsetTop;
				element = element.offsetParent;
			}

			return { x: left, y: top };
		}

};

music.init();

$(document).ready(function() {
	music.setToggleAnimation();
});