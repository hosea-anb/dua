const answerButton = document.getElementById('answerButton');
const yesButton = document.getElementById('yesButton'); // New Yes button reference
const response = document.getElementById('response');

// When the user clicks the "nah" button, make it move away
answerButton.addEventListener('click', function() {
    const randomX = Math.random() * 500 - 250;
    const randomY = Math.random() * 500 - 250;
    answerButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    response.textContent = "opsieeeee your jealous ass tried to click 'no' try again looser.";
});

// When the user clicks "Yes", show a message
yesButton.addEventListener('click', function() {
    response.textContent = "yaay";
});
