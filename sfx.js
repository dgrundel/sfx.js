var sfx = (function(){
	var context = new (window.AudioContext || window.webkitAudioContext)();
	var sounds = {};

	function error() { }

	function load(name) {
		if(sounds[name] && sounds[name].path) {
			var request = new XMLHttpRequest();
			request.open('GET', sounds[name].path, true);
			request.responseType = 'arraybuffer';
			request.onload = function() {
				context.decodeAudioData(request.response, function(theBuffer) {
					sounds[name].buffer = theBuffer;
				}, error);
			}
			request.send();
		}
	}

	function play(name) {
		if(sounds[name] && sounds[name].buffer) {
			var buffer = sounds[name].buffer;
			var gainValue = typeof sounds[name].gain === 'number' ? sounds[name].gain : 1;
			var source = context.createBufferSource()
			var g = context.createGain();

			source.buffer = buffer;
			source.start(0);
			g.gain.value = gainValue;
			source.connect(g);
			g.connect(context.destination);
		}
	}

	function add(name, settings) {
		sounds[name] = settings;
		load(name);
	}

	return {
		play: play,
		add: add,
	}
})();