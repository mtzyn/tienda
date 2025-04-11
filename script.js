/* script.js */
document.addEventListener('DOMContentLoaded', function() {
  // Acción de compra simulada para cada producto
  const buyButtons = document.querySelectorAll('.buy-btn');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const productName = this.getAttribute('data-product');
      // Seleccionamos el ícono del carrito dentro del botón
      const cartIcon = this.querySelector('.fa-shopping-cart');

      // Aplicamos la animación al ícono
      cartIcon.classList.add('cart-animate');

      // Esperamos 0.5s (la duración de la animación) antes de quitarla
      setTimeout(() => {
        cartIcon.classList.remove('cart-animate');
        // Mostramos la alerta tras la animación
        alert(`Has añadido "${productName}" a tu carrito!`);
      }, 500);
    });
  });
  
  // Gestión del formulario de contacto
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
  });

  // Modificar el estilo del navbar al hacer scroll
  const navbar = document.querySelector('.custom-navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});