const rippleText = document.querySelector('p');

rippleText.addEventListener('mousedown', (event) => {
    const x = event.clientX - rippleText.offsetLeft;
    const y = event.clientY - rippleText.offsetTop;

    const ripple = document.createElement('span');
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    rippleText.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1000); // Удаляем волну через 1 секунду
});