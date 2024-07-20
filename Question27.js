{
    var alien_color = 'red';
    // Check the alien's color and award points accordingly
    if (alien_color === 'green') {
        console.log("Congratulations! You just earned 5 points for shooting the green alien.");
    }
    else if (alien_color === 'yellow') {
        console.log("Nice shot! You just earned 10 points for shooting the yellow alien.");
    }
    else if (alien_color === 'red') {
        console.log("Great job! You just earned 15 points for shooting the red alien.");
    }
    else {
        console.log("Unknown alien color. No points earned.");
    }
}
