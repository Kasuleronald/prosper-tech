(function() {
    function toggleMenu() {
      var menu = document.getElementById('nav-menu');
      if (menu.style.display === 'flex') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
      }
    }
  
    let slideIndex = 0;
    let slides, indicators;
  
    function showSlides() {
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));
      slides[slideIndex].classList.add('active');
      indicators[slideIndex].classList.add('active');
      slideIndex++;
      if (slideIndex >= slides.length) slideIndex = 0;
      setTimeout(showSlides, 5000);
    }
  
    function plusSlides(n) {
      slideIndex += n;
      if (slideIndex >= slides.length) slideIndex = 0;
      else if (slideIndex < 0) slideIndex = slides.length - 1;
      updateSlides();
    }
  
    function goToSlide(n) {
      slideIndex = n;
      updateSlides();
    }
  
    function updateSlides() {
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));
      slides[slideIndex].classList.add('active');
      indicators[slideIndex].classList.add('active');
    }
  
    document.addEventListener('DOMContentLoaded', () => {
      slides = document.querySelectorAll('.slide');
      indicators = document.querySelectorAll('.indicator');
      showSlides();
    });
  
    // Expose functions to global scope for HTML onclick attributes
    window.plusSlides = plusSlides;
    window.goToSlide = goToSlide;
    window.toggleMenu = toggleMenu;
  })();

  function openChat() {
    document.getElementById('chat-window').style.display = 'flex';
  }
  
  function closeChat() {
    document.getElementById('chat-window').style.display = 'none';
  }
  
  function sendMessage(event) {
    if (event.key === 'Enter') {
      const input = document.getElementById('chat-input');
      const message = input.value.trim();
      if (message) {
        const chatMessages = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  }
