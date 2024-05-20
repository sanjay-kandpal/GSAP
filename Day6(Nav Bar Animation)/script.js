var tl = gsap.timeline()
const main = document.getElementById('main');
const close = document.querySelector('full i')


main.addEventListener('click',timelineAnimate);

tl.to("#full",{
    right: 0,
    duration: 0.8
})

tl.from("#full h4",{
    x: 150,
    duration: 0.7,
    stagger: 0.28,
    opacity: 0
})

tl.from("#full i",{
    opacity: 0,
})

tl.pause()


function timelineAnimate(){
    tl.play()
}

close.addEventListener('click',()=>{
    tl.reverse()
})