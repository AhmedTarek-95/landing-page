//*** build navbar by fragment to make loading page more preformance then declear variables and make of loop **
const sections = document.querySelectorAll("section");
const df = document.createDocumentFragment();
const myulist = document.getElementById("navbar__list");
    for(const section of sections ){
    let myli = document.createElement("li");
    let myid = section.getAttribute("id");
    let mydatanav= section.getAttribute("data-nav");
    myli.innerHTML =`'<a class="menu__link href="#${myid}" "${mydatanav}>${myid}</a>'`;
    df.appendChild(myli)
}
//show nav bar by add list
myulist.appendChild(df)

window.addEventListener("scroll",function(){
//activate sections
const option={  
    threshold:0.7
};
let observer = new IntersectionObserver(function(entries, _observer){

    entries.forEach(entry => {
    if(entry.isIntersecting){
        console.log(entry.target);
        entry.target.classList.add("your-active-class")
    }else{
        entry.target.classList.remove("your-active-class")
    }
    }); 
}, option);
//loop active for each section observe
for(let section of sections ){
    observer.observe(section);
};
});

//smooth scrolling 
const smooth= document.querySelectorAll(".menu__link")
//loop for select section
for(let z=0; z<smooth.length; z++){
smooth[z].addEventListener("click",function(event){
    event.preventDefault();
    sections[z].scrollIntoView({behavior: "smooth" , block:"end"});
});
}
