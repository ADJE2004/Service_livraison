// 1. Gestion du Menu Mobile (Ouverture / Fermeture)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Ajoute ou enlève la classe 'active' au menu à chaque clic
        navLinks.classList.toggle('active');
    });
}

// 2. Gestion du Formulaire de Contact (Redirection automatique vers WhatsApp)
const deliveryForm = document.getElementById('deliveryForm');

if (deliveryForm) {
    deliveryForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        
        // Récupération des données saisies par le client
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const details = document.getElementById('details').value;
        
        // --- CONFIGURATION DE TON NUMÉRO ---
        // Remplace par ton vrai numéro du Bénin (sans le +, juste l'indicatif 229)
        const baseNumber = "22900000000"; 
        
        // Construction du message textuel propre
        const message = `Bonjour Benin Livraisons, je souhaite passer une commande :\n\n` +
                        `*Nom:* ${name}\n` +
                        `*Téléphone:* ${phone}\n` +
                        `*Service:* ${service}\n` +
                        `*Détails & Trajet:* ${details}`;
        
        // Encodage du message pour qu'il soit compatible avec une URL web
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${baseNumber}?text=${encodedMessage}`;
        
        // Ouvre WhatsApp dans un nouvel onglet avec le message déjà écrit !
        window.open(whatsappUrl, '_blank');
    });
}