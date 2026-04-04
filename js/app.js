const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1'
            e.target.style.transform = 'translateY(0)'
        }
    });
}, {
    threshold: 0.2
})

document.querySelectorAll('.observer').forEach(el => {
    el.style.opacity    = '0'
    el.style.transform  = 'translateY(24px)'
    el.style.transition = 'opacity .5s ease, transform .5s ease'
    observer.observe(el);
})