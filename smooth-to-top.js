document.addEventListener('click', function(event) {
    let target = event.target;
    while (target != document.body) {
        if (target.tagName === 'A') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        target = target.parentNode;
    }
});
