var menuicon=document.querySelector(".menu-icon");

menuicon.addEventListener("click",()=>{
    menuicon.classList.toggle("active")
})


// ---------------moving strips---------------

window.addEventListener("wheel",(op)=>{
    if(op.deltaY>0){
        gsap.to(".move",{
             transform:'translateX(-200%)',
                 duration:3,
                 repeat:-1,
                 ease:"none"
             })  

        gsap.to(".move i",{
            rotate:180,
        })
    }
    else{
        gsap.to(".move",{
            transform:'translateX(0%)',
                duration:3,
                repeat:-1,
                ease:"none"
            }) 
            gsap.to(".move i",{
                rotate:0,
            }) 
        }
})



window.addEventListener("wheel",(op)=>{
    if(op.deltaY>0){
        gsap.to(".move-id",{
             transform:'translateX(0%)',
                 duration:3,
                 repeat:-1,
                 ease:"none"
             })  

        gsap.to(".move-id i",{
            rotate:180,
        })
    }
    else{
        gsap.to(".move-id",{
            transform:'translateX(-200%)',
                duration:3,
                repeat:-1,
                ease:"none"
            }) 
            gsap.to(".move-id i",{
                rotate:0,
            }) 
        }
})

//switch between about buttons----------

const buttons=document.querySelectorAll(".about-btn button");
const contents=document.querySelectorAll(".content");

buttons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        contents.forEach((content)=>content.style.display="none");
        contents[index].style.display="block";
        buttons.forEach(btn=>btn.classList.remove("actiev"));
        button.classList.add("active")
    })
})


//--------------textline-----------

gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 32%",
        end:"40%",
        scrub:3.5,
        pin:true,
    }
})

// ----------------------moving cursor----------------

var opp=document.querySelector("body");
var move=document.querySelector(".cursor");

var opp=document.querySelector("body");
opp.addEventListener("mousemove",(op)=>{
    console.log("mobing");
    gsap.to(move,{
        x:op.x,
        y:op.y,
        duration:0.5,
        CSS:{
            zIndex:10,
        }
    })
})

var about=document.querySelector("#about");
about.addEventListener("mouseenter",()=>{
    gsap.to(move,{
        scale:2.7,
        color:"#fff",
        background:"rgb(304, 225, 165)",
        zIndex:-10,
        borderRadius:"50%",
        width:"30px",
        fontSize:"6px",
        Transition:0.4,
        height:"30px",
        rotate:360,
        ease: "power2.inOut",

        onStart:()=>{
            move.innerHTML="<p>About Me</p>";
        }
    })
})

var section=document.querySelector("#services");
section.addEventListener("mouseenter",()=>{
    gsap.to(move,{
        scale:3.3,
        color:"#fff",
        background:"rgb(104, 525, 165)",
        zIndex:-10,
        Transition:0.3,
        borderRadius:"50%",
        rotate:360,
        width:"30px",
        height:"30px",
        ease: "power2.inOut",

        onStart:()=>{
            move.innerHTML="<p>My Services</p>";
        }
    })
})

var contact=document.querySelector("#contact");
contact.addEventListener("mouseenter",()=>{

     gsap.to(move,{
        
        scale:22,
        color:"#fff",
        background:"#000",
        zIndex:-10,
        borderRadius:0,
        width:"10%",
        rotate:360,
        opacity:1,
        textAlign:"top",
        ease: "power2.inOut",

        onStart:()=>{
            move.innerHTML="<p class='style'>Contact me</p>";
        }
     })
})
var project=document.querySelector("#Projects");
project.addEventListener("mouseenter",()=>{

     gsap.to(move,{
        
        scale:10,
        color:"#000",
        zIndex:-10,
        borderRadius:0,
        width:"10%",
        textAlign:"top",
        height:"7.8%",
        transition:0.4,
        scrub:2,
        ease: "power2.inOut",

        background:"#e3edf7",
        onStart:()=>{
            move.innerHTML="<p>Click to See </p>";
        }
     })
})

// ---------------loading animation header-------------
var time=gsap.timeline();
gsap.from(".home .img-hero img",{
    x:150,
    duration:0.9,
    
})
gsap.from(".home .img-hero .rotate-text",{
    y:-600,
    x:-1500,
    duration:.5,
    delay:1.8,
    opacity:0,
})
gsap.from(".home .hero-info",{
    x:-150,
    duration:0.9, 
    opacity:0,
})
gsap.from(".home .hero-info .social-media .bg-icon",{
    y:200,
    stagger:0.3,
    opacity:0,
    rotate:360,
})

gsap.from("header .navlist li",{
    y:-40,
    duration:0.9,
    stagger:0.17,
    opacity:0,
    rotate:-30,
})
gsap.from("header .logo",{
    duration:0.9,
    opacity:0,
    stagger:0.3,
    y:-40,
})
// gsap.from("#about .col-4",{
//     x:-400,
//     opacity:0,
//     duration:1.3,
//     rotate:35,
//     scrub:2,
//     scrollTrigger:{
//         trigger:"#about .about-content",
//         scroller:"body",
//         start:"top 40%",
//         end:"top 30%",
//         scrub:2,
//         pin:true,
//         markers:"true",
//       }
// })
// gsap.from("#about .about-content",{
//    opacity:0,
//    x:400,
//    rotate:-35,
//    duration:1.3,
//    scrub:2,
//    scrollTrigger:{
//     trigger:"#about .about-content",
//     scroller:"body",
//     start:"top 40%",
//     end:"top 30%",
//     markers:"true",
//     scrub:2,
//     pin:true,
//   }
// })
// gsap.from("#services .main-text",{
//      y:-200,
//      opacity:0,
//      duration:0.9,
// })

// gsap.from("#Projects",{
//     scale:0,
//     duration:1,
//     scrub:4,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#Projects",
//         scroller:"body",
//         start:"top 110%",
//         end:"top 102%",
//         pin:true,
//         scrub:5,
//     }
// })