let score = 0;
const scoreDisplay = document.getElementById('score');
const moles = document.querySelectorAll('.mole');
const hammer = document.getElementById('hammer');

// Function to pop up a mole
function randomMole() {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const mole = moles[randomIndex];
    mole.classList.add('active');

    // Mole goes back down after 1 second
    setTimeout(() => {
        mole.classList.remove('active');
        randomMole(); // Repeat for the next mole
    }, 1000);
}

// Event listener for clicking the mole
moles.forEach(mole => {
    mole.addEventListener('click', () => {
        if (mole.classList.contains('active')) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            mole.classList.remove('active');
        }
    });
});

// Hammer follows the mouse
document.addEventListener('mousemove', (e) => {
    hammer.style.left = `${e.pageX - 50}px`; // Center hammer on cursor
    hammer.style.top = `${e.pageY - 50}px`;
});

// Animate the hammer when clicking
document.addEventListener('click', () => {
    hammer.style.transform = 'rotate(20deg)';
    setTimeout(() => {
        hammer.style.transform = 'rotate(0deg)';
    }, 100);
});

// Start the game
randomMole();
