function breakTheText(){
    
    const h1Text = document.querySelector('h1').textContent
    const h1 = document.querySelector('h1')
    let splittedText = h1Text.split("")
    
    console.log(splittedText);
      
    let clutter = ""
    
    splittedText.forEach(function(elem,index){
        clutter += `<span class=a${index}>${elem}</span>`
        
    })
    
    h1.innerHTML = clutter   
    console.log(h1);  
}

breakTheText()

gsap.from("h1 span",{
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.2
})