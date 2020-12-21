bad = [
	new Audio('bad0.mp3')
]

balle = [
	new Audio('balle0.mp3')
]

basically = [
	new Audio('basically0.mp3'),
	new Audio('basically1.mp3'),
	new Audio('basically2.mp3'),
	new Audio('basically3.mp3'),
	new Audio('basically4.mp3')
];

come_on = [
	new Audio('come_on0.mp3'),
	new Audio('come_on1.mp3')
];

good = [
	new Audio('good0.mp3')
];

good_morning_sir = [
	new Audio('good_morning_sir0.mp3')
]

good_morning = {
	name: "good_morning",
	count: 1
}

hello = {
	name: "hello",
	count: 2
}

hoy_hoy_hoy = [
	new Audio('hoy_hoy_hoy0.mp3'),
	new Audio('hoy_hoy_hoy1.mp3'),
	new Audio('hoy_hoy_hoy2.mp3')
];

jaldi_jaldi = [
	new Audio('jaldi_jaldi0.mp3')
];

no = {
	name: "no",
	count: 2
}

oh = {
	name: "oh",
	count: 2
}

oh_bhangra_santa = [
	new Audio('oh_bhangra_santa0.mp3'),
	new Audio('oh_bhangra_santa1.mp3')
];

oh_no = [
	new Audio('oh_no0.mp3'),
	new Audio('oh_no1.mp3')
];

oh_thats_the_one = {
	name: "oh_thats_the_one",
	count: 2
}

funny = {
	name: "funny",
	count: 1
}

ok = {
	name: "ok",
	count: 2
}

problem_solved = {
	name: "problem_solved",
	count: 1
}

uhhh = [
	new Audio('uhhh0.mp3')
];

speed = document.querySelector("#pitch-div input");

function playRandom(list) {
	if(Math.random() < 0.05) {
		playFunnyNo();
		return;
	}
	sound = list[Math.floor((Math.random()*list.length))];
	sound.playbackRate = parseFloat(speed.value)/100;
	sound.preservePitch = false;
	sound.play();
	return;
}

function playObject(object) {
	console.log(object);
	console.log(object.count);
	if(Math.random() < 0.05) {
		playFunnyNo();
		return;
	}
	index = Math.floor(Math.random()*object.count);
	sound = new Audio(object.name + index + ".mp3");
	playSound(sound);
}

function playSound(sound) {
	sound.playbackRate = parseFloat(speed.value)/100;
	sound.preservePitch = false;
	sound.play();
}

function playFunnyNo() {
	sound = new Audio("no_patel0.mp3");
	playSound(sound);
}
// function LinkCheck(url)
// {
//     var http = new XMLHttpRequest();
//     http.open('HEAD', url, false);
//     http.send();
//     return http.status!=404;
// }

// function playRandomByName(fname) {
// 	songs = Array();
// 	i = 0;
// 	while(true) {
// 		console.log(songs);
// 		song = new Audio(fname + i + ".mp3");
// 		console.log(song);
// 		console.log(song.error);
// 		if(song.error == null) {
// 			songs.push(song);
// 		} else {
// 			break;
// 		}
// 		i++;
// 	}
// 	console.log(songs);
// 	playRandom(songs);
// }

function updateSpeed() {
	document.getElementById("speed").innerHTML = speed.value/100;
}
// https://stackoverflow.com/questions/25157513/javascript-pitch-shift-with-time-stretch#answer-49749868
// function playSound(file, speed=1, pitchShift=1, loop=false, autoplay=true) {
//     /*
//     Use the play() method to start the audio. if pitchShift is true
//     use the stop() method to stop the audio and destroy the object.
//     If pitchShift is false use the pause() method to pause and set
//     the attribute currentTime to 0 to reset the time.
//     */
//     if(pitchShift) {
//         /*
//         After weeks of searching, I have finally found a way to pitch shift audio.
//         Thank you Mozilla.
//         2018/03/31:
//             https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/playbackRate
//             https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data
//             https://www.w3schools.com/jsref/prop_audio_loop.asp
//         Original comments:
//             use XHR to load an audio track, and
//             decodeAudioData to decode it and stick it in a buffer.
//             Then we put the buffer into the source
//         */
//         audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//         source = audioCtx.createBufferSource();
//         request = new XMLHttpRequest();

//         request.open('GET', file, true);

//         request.responseType = 'arraybuffer';


//         request.onload = function() {
//             var audioData = request.response;

// 	        audioCtx.decodeAudioData(audioData, function(buffer) {
// 	            myBuffer = buffer;
// 	            songLength = buffer.duration;
// 	            source.buffer = myBuffer;
// 	            source.playbackRate.value = speed;
// 	            source.connect(audioCtx.destination);
// 	            source.loop = loop;
// 	        },

// 	        function(e){"Error with decoding audio data" + e.error});

//         }

//         request.send();
//         source.play=source.start
//     } else {
//         source=new Audio(file)
//         source.playbackRate=speed
//         source.loop=loop
//     }
//     if(autoplay) {
//         source.play()
//     }
//     return source
// }
// var source
// function play(file, pitch, speed) {
//     source=playSound('decode-audio-data/viper.ogg', pitch=2);
// }

// function stop() {
//     source.stop(0);
//     document.getElementById('play').href=''
//     document.getElementById('play').innerHTML='Refresh to play again'
// }
