var loader = document.getElementById('loadbody')

window.addEventListener('load', function () {
  loader.style.display = 'none'
})

// video

const videos = document.querySelectorAll('.project-video')

videos.forEach(vid => {
  vid.addEventListener('mouseenter', e => {
    vid.play()
  })
})
videos.forEach(vid => {
  vid.addEventListener('mouseleave', e => {
    vid.pause()
  })
})
