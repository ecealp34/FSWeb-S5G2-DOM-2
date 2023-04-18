import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
//  alert("Bana tıkladın!")
//  });


// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click",(e) => {
    alert("Hoşgeldiniz")
    });


let destination = document.getElementsByClassName("destination")
let h4 = document.getElementsByTagName("h4")
let p = document.getElementsByTagName("p") 

for(let i = 0; i < destination.length; i++) {
    destination[i].addEventListener('click', function() {
        this.getElementsByTagName("h4")[0].style.color = "blue"
        this.getElementsByTagName("p")[0].style.color = "green"
       

    })
}

for(let i = 0; i < destination.length; i++) {
    destination[i].addEventListener('mouseleave', function() {
        this.getElementsByTagName("h4")[0].style.color = "black"
        this.getElementsByTagName("p")[0].style.color = "black"
    })
}

for(let i = 0; i < destination.length; i++) {
    destination[i].addEventListener('mouseover', function() {
       this.getElementsByTagName("h4")[0].style.color = "yellow"
       this.getElementsByTagName("p")[0].style.color = "darkblue"

    })
}

let sepeteEkle = document.createElement("Sepete Ekle");

document.getElementById("sepetEkle").addEventListener("keydown", () => {
    document.getElementById("sepetEkle").style.backgroundColor = "purple"
})


let h1 = document.getElementByTagName('h1');


h1.addEventListener('animationstart', (ev) => {
    console.log("Animation Started", ev);
});

h1.addEventListener('animationiteration', (ev) => {
  console.log("animation_iteration", ev);
});

h1.addEventListener('animationend', (ev) => {
   console.log("animation end", ev);
});

h1.addEventListener('animationcancel', (ev) => {
    console.log("Animation canceled" , ev); 
});



for(let i = 0; i < nav-link.length; i++) {
    nav-link[i].addEventListener('mouseover', function() {
       this.style.fontSize = "36px"
       this.style.color = "darkblue"

    })
}


let anasayfa = document.getElementByClassName("nav-link")[0]

anasayfa.addEventListener("dblclick", myFunction => {
     anasayfa.innerHTML = "double-clicked!"
});






