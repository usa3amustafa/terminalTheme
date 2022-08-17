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

// navbar

const logo = document.querySelector('.logo')
const header = document.querySelector('#header')
const headerClass = document.querySelector('.header')
const about = document.querySelector('.about')

const sectionOneOptions = {
  rootMargin: '30px',
  threshold: 0.8,
}

const sectionOneObserver = new IntersectionObserver(function (
  enteries,
  sectionOneObserver
) {
  enteries.forEach(entry => {
    console.log(entry)

    if (!entry.isIntersecting) {
      header.classList.add('sticky')
      headerClass.classList.add('sticky-header')
      logo.classList.add('hidden')
    } else {
      header.classList.remove('sticky')
      headerClass.classList.remove('sticky-header')
      logo.classList.remove('hidden')
    }
  })
},
sectionOneOptions)

sectionOneObserver.observe(about)
