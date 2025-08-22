document.addEventListener('DOMContentLoaded', function() {
    // typing
    const texts = [
        "Computer Science Student",
        "Software Developer",
        "Automation & Machine Learning",
        "Database Programmer",
        "Competitive Programmer",
    ];
    const typewriter = document.getElementById('typewriter');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 60;  
    const deletingSpeed = 40; 
    const delayBetween = 1000; 

    function typeWriter() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            typewriter.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeWriter, delayBetween);
                return;
            }
        } else {
            typewriter.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; 
            }
        }

        setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeWriter();

    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00f0ff" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#9d4edd",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // modal sertif
    const modal = document.getElementById('certificateModal');
    const closeBtn = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const viewButtons = document.querySelectorAll('.view-certificate');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.getAttribute('data-title');
            const image = this.getAttribute('data-image');
            modalTitle.textContent = title;
            modalImage.src = image;
            modal.style.display = 'flex';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
