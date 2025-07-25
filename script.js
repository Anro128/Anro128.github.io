document.addEventListener('DOMContentLoaded', function() {
    const text = "Computer Science Student • Developer • Competitive Programmer";
    const typewriter = document.getElementById('typewriter');
    let i = 0;
    
    function typeWriter() {
    if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
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
});