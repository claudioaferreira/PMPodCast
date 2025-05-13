// Aquí puedes agregar funcionalidad JavaScript adicional si lo necesitas
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo: Animación suave al hacer clic en los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});