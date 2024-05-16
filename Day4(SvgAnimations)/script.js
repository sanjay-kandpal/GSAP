
var initialPath = `M 10 100 Q 250 100 490 100`

var finalPath =`M 10 100 Q 250 100 490 100`

var string = document.querySelector("#string")

string.addEventListener('mousemove',function(dets){
    path = `M 10 100 Q 500 ${dets.y} 990 100`,
    gsap.to("svg path",{
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        att: {d: finalPath},
        duration: 2,
        ease: "elastic.out(0.2)"
    })
})