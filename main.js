const sec1=document.getElementById("welcome-section");
const an=document.querySelector('.color-image')
const para =document.getElementById("para");
const btn=document.getElementById("btn");
const options={
    threshold:0,
    rootMargin:"-200px"
}
const observer=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entrie=>{if(entrie.isIntersecting){
        console.log(entrie.target);
        an.classList.remove("mina");
        an.classList.add("anim");
        para.classList.add("colorchange1")
       btn.classList.add("colorchange")
    // entrie.target.
    }
       else{
       an.classList.remove("anim");
       an.classList.add("mina");
       para.classList.remove("colorchange1")
       btn.classList.remove("colorchange")
      
    }
    })
},options);

observer.observe(sec1);
const nav=document.querySelector(".navbar")
const ul=document.querySelector("#ull")
const menu=document.querySelector(".menu")
menu.addEventListener("click",()=>{
    ul.classList.toggle("ulce")
    nav.classList.toggle("nvb")
    console.log("hello")
})
const activepage=window.location.pathname;
const navlink=document.querySelectorAll(".inblock")
.forEach(link=>{
   if(link.href.includes(`${activepage}`))
console.log(activepage)
})
//     // 

//  