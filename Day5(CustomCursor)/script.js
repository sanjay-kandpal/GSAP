var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener('mousemove',function(e){
    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "back.out"
    })
})

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "ViewMore"
    gsap.to(cursor,{
        scale: 4
    })
})

imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML = " "
    gsap.to(cursor,{
        scale: 1
    })
})