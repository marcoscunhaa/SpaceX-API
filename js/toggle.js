const ukuleleAudio = document.getElementById('audio-ukulele');
const loboAudio = document.getElementById('lobo-pede');
const cebolinhaAudio = document.getElementById('cebolinha');


function toggleAudioUkulele() {
    loboAudio.pause();
    cebolinhaAudio.pause();
    ukuleleAudio.play();
}

function toggleLobo() {
    cebolinhaAudio.pause();
    ukuleleAudio.pause();
    loboAudio.play();
}

function toggleCebolinha() {
    ukuleleAudio.pause();
    loboAudio.pause();
    cebolinhaAudio.play();
}

function toggleCoordenadas() {
    document.getElementById('textinho').style.display = 'none';
    document.getElementById('timeline').style.display = 'none';
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    var display = document.getElementById('coordenadas-do-amor').style.display;
    if (display == 'none') {
        document.getElementById('coordenadas-do-amor').style.display = 'block';
    } else {
        document.getElementById('coordenadas-do-amor').style.display = 'none';
        document.getElementById('te-amo').style.display = 'none';
        document.getElementById('love-u').style.display = 'none';
        document.getElementById('ti-amo').style.display = 'none';
    }
}

function toggleMaps(el) {
    var display = document.getElementById(el).style.display;
    if (display == 'none') {
        document.getElementById(el).style.display = 'block';
    } else {
        document.getElementById(el).style.display = 'none';
    }
}



function toggleTextinho() {
    document.getElementById('te-amo').style.display = 'none';
    document.getElementById('love-u').style.display = 'none';
    document.getElementById('ti-amo').style.display = 'none';
    document.getElementById('coordenadas-do-amor').style.display = 'none';
    document.getElementById('timeline').style.display = 'none';
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    var display = document.getElementById('textinho').style.display;
    if (display == 'none') {
        document.getElementById('textinho').style.display = 'block';
    } else {
        document.getElementById('textinho').style.display = 'none';
    }
}

function toggleGatinho() {
    document.getElementById('te-amo').style.display = 'none';
    document.getElementById('love-u').style.display = 'none';
    document.getElementById('ti-amo').style.display = 'none';
    document.getElementById('coordenadas-do-amor').style.display = 'none';
    document.getElementById('timeline').style.display = 'none';
    document.getElementById('textinho').style.display = 'none';
    var display = document.getElementById('video-dos-gatinhos').style.display;
    if (display == 'none') {
        document.getElementById('video-dos-gatinhos').style.display = 'block';
    } else {
        document.getElementById('video-dos-gatinhos').style.display = 'none';
    }
}


function toggleTimeline() {
    document.getElementById('te-amo').style.display = 'none';
    document.getElementById('love-u').style.display = 'none';
    document.getElementById('ti-amo').style.display = 'none';
    document.getElementById('coordenadas-do-amor').style.display = 'none';
    document.getElementById('textinho').style.display = 'none';
    document.getElementById('video-dos-gatinhos').style.display = 'none';
    var display = document.getElementById('timeline').style.display;
    if (display == 'none') {
        document.getElementById('timeline').style.display = 'block';
    } else {
        document.getElementById('timeline').style.display = 'none';
    }
}


