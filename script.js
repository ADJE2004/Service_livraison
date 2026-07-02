// 1. Gestion du Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Traitement du Formulaire -> Redirection WhatsApp
const deliveryForm = document.getElementById('deliveryForm');

if (deliveryForm) {
    deliveryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const details = document.getElementById('details').value;
        
        // Numéro extrait de la charte officielle JUSDORANGE (2290157485666)
        const baseNumber = "2290157485666"; 
        
        const message = `Bonjour YIWA, je souhaite réserver une course :\n\n` +
                        `*Nom:* ${name}\n` +
                        `*Téléphone:* ${phone}\n` +
                        `*Service:* ${service}\n` +
                        `*Détails:* ${details}`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${baseNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
}