const mouse = document.querySelectorAll("#circle")
const frames = document.querySelectorAll(".frame")

const lerp = (x, y, a) => x * (1 - a) + y * a;


frames.forEach((frame)=>{
    window.addEventListener("mousemove",(e)=>{
        gsap.to(mouse,{
           x:e.clientX,
           y:e.clientY,
           duration:0.2,
           ease:Expo
        })
     })
     
     frame.addEventListener("mousemove",(e)=>{
     
         let dimensions = frame.getBoundingClientRect() //give me starting and width of frmae
     
         var xstart = dimensions.x;
         var xend = dimensions.x + dimensions.width;
     
         let zeroone =  gsap.utils.mapRange(xstart,xend,0,1 , e.pageX)
         //last parameter to tell me on the basis of mouse
          
        
     
         gsap.to(mouse,{
             scale:8
         })
         gsap.to(frame.children,{
          color:"white",
          duration:.4,
          y:"-5vw"
         })
     
         gsap.to(frame.children,{
          x :  lerp(-50,50,zeroone),
          duration:2
         })
     })
     frame.addEventListener("mouseleave",()=>{
         gsap.to(mouse,{
             scale:1
         })
         gsap.to(frame.children,{
             color:"black",
             duration:.4,
             y:0
            })
     
            gsap.to(frame.children,{
             x :  0,
             duration:2
            })
     })
})





// lerp(initial , final , what you eant (0 to 1))

//map range => to map one range into another range eg => conerting 100 to 200 into 1 to 2