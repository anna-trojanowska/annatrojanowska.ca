var $btn = $('.btn-pause');
var $video = document.querySelector('.dino-vid');

$btn.on('click', function () {
    if ($video.playing) {
    $video.pause('Pause');
    } else {
    $video.play('Play') 
});