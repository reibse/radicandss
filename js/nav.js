var navLinks = document.getElementById("navLinks")

    function showMenu(){
        navLinks.style.right = "-180px";
    }

    function hideMenu(){
        navLinks.style.right = "-380px";
    }

document.addEventListener('scroll', () =>{
    const nav = document.querySelector('nav');
    const button = nav.querySelector('button');
    var link = document.getElementById('lnk');
    const isMediaQueryMatch = window.matchMedia('(max-width: 754px)').matches;
    

    if (window.scrollY > 0){
            console.log('scrolled')
            nav.classList.add('scrolled')
            if (!isMediaQueryMatch) {
                button.classList.add('btn-scrolled');
                link.classList.add('scroll');
        }
    }
    else {
            console.log('back at top')
            nav.classList.remove('scrolled')
            button.classList.remove('btn-scrolled');
            link.classList.remove('scroll');
        }
    }
)

var x = document.getElementById('sign-up');
var y = document.getElementById('sign-in');
var z = document.getElementById('btn');

    function register(){
        x.style.marginTop = "0px"
        y.style.marginTop = "-200px"
        z.style.left = "118px"
    }

    function login(){
        x.style.marginTop = "340px"
        y.style.marginTop = "50px"
        z.style.left = "0px"
    }


