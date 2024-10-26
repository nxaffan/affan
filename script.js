 // Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Character Hover Pop-Up Effect
document.querySelectorAll('#characters ul li').forEach(character => {
    character.addEventListener('mouseenter', () => {
        character.style.color = '#ffa500';
        character.style.fontWeight = 'bold';
    });

    character.addEventListener('mouseleave', () => {
        character.style.color = '#333';
        character.style.fontWeight = 'normal';
    });
});
