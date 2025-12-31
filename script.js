document.addEventListener('DOMContentLoaded', () => {
    // Check for year parameter
    const urlParams = new URLSearchParams(window.location.search);
    const year = urlParams.get('year');

    if (year === '2026') {
        const cardImage = document.getElementById('card-image');
        const overlayImage = document.querySelector('#overlay img');
        if (cardImage) cardImage.src = 'nengajo_2026.png';
        if (overlayImage) overlayImage.src = 'nengajo_2026.png';
    }

    const envelope = document.getElementById('envelope');
    const overlay = document.getElementById('overlay');
    let hasClicked = false;

    envelope.addEventListener('click', () => {
        if (hasClicked) return;
        hasClicked = true;

        // Step 1: Drop to bottom
        envelope.classList.add('drop-down');

        // Step 2: Open Flap (after drop finishes approx 800ms)
        setTimeout(() => {
            envelope.classList.add('open');
        }, 1000);

        // Step 3: Eject Card (after flap opens)
        setTimeout(() => {
            envelope.classList.add('eject');
        }, 1600);

        // Step 4: Show Modal/Fullscreen (after eject)
        setTimeout(() => {
            overlay.classList.add('visible');
        }, 2400);
    });
});
