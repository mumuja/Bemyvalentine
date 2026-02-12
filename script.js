const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    // Make the "No" button harder to click by moving it randomly
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById('yesBtn').addEventListener('click', () => {
    alert('Yay! Happy Valentine\'s Day! ❤️');
});
