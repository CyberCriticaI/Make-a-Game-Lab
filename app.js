function makeGuess(userGuess) {
    // Generate a random outcome: Heads or Tails
    const coinOutcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
    
    // Determine if the user's guess is correct
    const resultText = userGuess === coinOutcome 
        ? `Congratulations! The coin landed on ${coinOutcome}. You guessed correctly!` 
        : `Sorry, the coin landed on ${coinOutcome}. Better luck next time!`;
    
    // Display the result
    document.getElementById('result').innerText = resultText;
}
function flipCoin() {
    const coin = document.getElementById('coin');
    coin.classList.remove('flip'); // Remove existing flip class
    void coin.offsetWidth; // Trigger a reflow
    coin.classList.add('flip'); // Add flip class to start animation
}