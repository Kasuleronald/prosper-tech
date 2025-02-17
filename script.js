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
  
  function startChat() {
    const name = document.getElementById('chat-name').value.trim();
    const email = document.getElementById('chat-email').value.trim();
  
    if (name && email) {
      document.getElementById('chat-form').style.display = 'none';
      document.getElementById('chat-content').style.display = 'flex';
      document.getElementById('chat-messages').innerHTML = `<div>Welcome, ${name}!</div>`;
    } else {
      alert('Please enter your name and email.');
    }
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


  const text = "Our Vision is to Empower a connected world through innovative Technology Solutions that drive Efficiency, inspire Creativity and transform visibility of our Clients in today's growing digital world. ✌";
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust typing speed here (in milliseconds)
    } else {
        // Optional: Stop the cursor blinking after typing is done
        document.querySelector(".cursor").style.animation = "none";
    }
}

type();

const missionText = "Our mission is to empower businesses with cutting-edge technology and creative designs that drive growth and enhance online presence. Whether you need robust IT support, stunning graphics, a user-friendly website, or effective digital marketing strategies, we are here to make it happen.";
const typingTextMission = document.getElementById("typing-text-mission");
let missionIndex = 0;

function typeMissionText() {
  if (missionIndex < missionText.length) {
    typingTextMission.textContent += missionText.charAt(missionIndex);
    missionIndex++;
    setTimeout(typeMissionText, 50); // Adjust typing speed here (in milliseconds)
  } else {
    // Optional: Stop the cursor blinking after typing is done
    document.querySelector(".cursor").style.animation = "none";
  }
}

typeMissionText();
  
