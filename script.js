//========== Carousel ==========
document.addEventListener('DOMContentLoaded', function() {

// Main carousel (menu)
  const allCarousels = document.querySelectorAll('.carousel-container');
  const mainCarousel = allCarousels[0]?.querySelector('.carousel');
  const petCarousel = allCarousels[1]?.querySelector('.carousel');
  
  if (mainCarousel) {
    const mainItems = mainCarousel.querySelectorAll('.carousel-item');
    const mainDots = allCarousels[0].querySelectorAll('.carousel-dots .dot');
    let mainIndex = 0;
    
    function showMainSlide(index) {
      if (index >= mainItems.length) {
        mainIndex = 0;
      } else if (index < 0) {
        mainIndex = mainItems.length - 1;
      } else {
        mainIndex = index;
      }
      
      mainItems.forEach(item => item.classList.remove('active'));
      mainDots.forEach(dot => dot.classList.remove('active'));
      
      mainItems[mainIndex].classList.add('active');
      if (mainDots[mainIndex]) {
        mainDots[mainIndex].classList.add('active');
      }
    }
    
    mainDots.forEach((dot, index) => {
      dot.addEventListener('click', () => showMainSlide(index));
    });
    
    setInterval(() => {
      showMainSlide(mainIndex + 1);
    }, 2000);
  }
  

// Pet-friendly carousel
  if (petCarousel) {
    const petItems = petCarousel.querySelectorAll('.carousel-item');
    const petDots = allCarousels[1].querySelectorAll('.carousel-dots .dot');
    let petIndex = 0;
    
    function showPetSlide(index) {
      if (index >= petItems.length) {
        petIndex = 0;
      } else if (index < 0) {
        petIndex = petItems.length - 1;
      } else {
        petIndex = index;
      }
      
      petItems.forEach(item => item.classList.remove('active'));
      petDots.forEach(dot => dot.classList.remove('active'));
      
      petItems[petIndex].classList.add('active');
      if (petDots[petIndex]) {
        petDots[petIndex].classList.add('active');
      }
    }
    
    petDots.forEach((dot, index) => {
      dot.addEventListener('click', () => showPetSlide(index));
    });
    
    setInterval(() => {
      showPetSlide(petIndex + 1);
    }, 2000);
  }
});


// Universal function for arrows in both carousels
function moveCarousel(direction, carouselIndex) {
  const allCarousels = document.querySelectorAll('.carousel-container');
  const targetCarousel = allCarousels[carouselIndex]?.querySelector('.carousel');
  
  if (!targetCarousel) return;
  
  const items = targetCarousel.querySelectorAll('.carousel-item');
  const dots = allCarousels[carouselIndex]?.querySelectorAll('.carousel-dots .dot');
  let currentSlideIndex = 0;
  
  items.forEach((item, index) => {
    if (item.classList.contains('active')) {
      currentSlideIndex = index;
    }
  });
  

  items[currentSlideIndex].classList.remove('active');
  if (dots && dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.remove('active');
  }
  

  currentSlideIndex = currentSlideIndex + direction;
  
  if (currentSlideIndex >= items.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = items.length - 1;
  }
  

  items[currentSlideIndex].classList.add('active');
  if (dots && dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.add('active');
  }
}


// ========== SCROLL  ==========
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});


// ========== COOKIES ==========
function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

function getCookie(cName) {
  let name = cName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

document.addEventListener('DOMContentLoaded', function() {
  const cookieBtn = document.querySelector("#cookie-btn");
  const cookieRejectBtn = document.querySelector("#cookie-reject-btn")
  const cookieBanner = document.querySelector("#cookies");
  
  if (cookieBtn) {
    cookieBtn.addEventListener("click", () => {
      cookieBanner.style.display = "none";
      setCookie("cookie", "true", 10);
    });
  }

  if (cookieRejectBtn) {
    cookieRejectBtn.addEventListener("click", () => {
      cookieBanner.style.display = "none";
      setCookie("cookie", "false", 10);
    });
  }
  
  if (getCookie("cookie") === "true" || getCookie("cookie") === "false") {
    cookieBanner.style.display = "none";
  }
});