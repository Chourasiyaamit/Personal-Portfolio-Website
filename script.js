// Active Navbar Links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {

    navLinks.forEach(l => l.classList.remove('active'));

    this.classList.add('active');

    setTimeout(() => {
      this.classList.remove('active');
    }, 5000);
  });
});

// Responsive Navbar Open/Close
const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector("#menu-open-button");
const closeBtn = document.querySelector("#menu-close-button");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
});


navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  });
});

// Form Submition
const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // stop page reload

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('Message sent successfully! I will get back to you soon.');
      form.reset();
    } else {
      alert('Oops! Something went wrong. Please try again later.');
    }
  } catch (error) {
    alert.error('Failed to send message. Check your internet connection.');
  }
});