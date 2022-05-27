const container =document.querySelector('.container')
const video = document.getElementById('videoplayer')
const controlbtn = document.querySelector( '.controlbtn' )
const play = document.querySelector('.play')
const pause =document.querySelector('.pause')
const backword = document.querySelector('.backword')
const forwerd =document.querySelector('.forwerd')
const voice =document.getElementById('volume')
const mute =document.querySelector('.mute')
const fullscreen = document.querySelector( '.fullscreen' )
//play 
play.addEventListener( 'click', () =>
{
    if ( true )
    {
        video.play()
    }

} )

//pause
pause.addEventListener( 'click', () =>
{
    if ( true )
    {
        video.pause()
    }

} )

//back
backword.addEventListener( 'click', () =>
{
    if ( true )
    {
        video.currentTime-=1
    }

} )

// //next
forwerd.addEventListener( 'click', () =>
{
    if ( true )
    {
        video.currentTime+=1
    }

} )

// //mute 
mute.addEventListener( 'click', function ()
{
    if ( video.muted == true ) { video.muted = false }
    else{video.muted=true}
    

})
// voice
voice.addEventListener( 'click',function ()
{
video.volume = voice.value
  

    }
)
//fullscreen
fullscreen.addEventListener( 'click',function ()
{
video.webkitEnterFullscreen()
    }
)
