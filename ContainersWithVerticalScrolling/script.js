document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('click-button');
    const scoreElement = document.getElementById('score');
    let score = 0;

    clickButton.addEventListener('click', () => {
        score++;
        scoreElement.textContent = score;
    });
});
