// Nav shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 40);
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const prenoms = this.prenoms.value.trim();
  const email = this.email.value.trim();
  if (!prenoms) { alert('Merci d\'indiquer vos prénoms.'); return; }
  if (!email)   { alert('Merci d\'indiquer votre email.'); return; }

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(this)).toString()
  })
  .then(() => {
    this.style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
  })
  .catch(() => alert('Une erreur est survenue. Merci de réessayer.'));
});
