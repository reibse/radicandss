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
        x.style.padding  = "17px 0"
        x.style.marginTop = "100px"
        y.style.marginTop = "-320px"
        y.style.padding = "0px"
        z.style.left = "113px"
    }

    function login(){
        x.style.marginTop = "0px"
        x.style.padding = "0px"
        y.style.marginTop = "0px"
        y.style.padding = "80px 0"
        z.style.left = "0px"
    }


    let slideIndex = 1;
      showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

  //---------------------POP UP SCRIPT FOR FAQS------------------//
 
  const faqQuestions = document.querySelectorAll('.faq-question');
  

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        // Hide all other answers
        const allAnswers = document.querySelectorAll('.faq-answer');
        allAnswers.forEach(ans => ans.style.display = 'none');
        
        // Show the clicked answer
        answer.style.display = 'block';
        answer.style.animation = 'slideRight 0.5s ease-out forwards';
      }
    });
  });

  //=======================Prevent Screenshot==========//


document.addEventListener("contextmenu",(event)=>{
  event.preventDefault();
});
  
    
