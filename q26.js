{
    var alien_color = 'green';
    console.log("Check the alien's color and award points accordingly");
    if (alien_color === 'green') {
        console.log("Congratulations! You just earned 5 points for shooting the green alien.");
    }
    else {
        console.log("No points earned this time. The alien's color is not green.");
    }
}
{
    var alien_color = 'yellow';
    console.log("Check the alien's color and award points accordingly");
    if (alien_color === 'green') {
        console.log("Congratulations! You just earned 5 points for shooting the green alien.");
    }
    else if (alien_color === 'yellow') {
        console.log("Nice shot! You just earned 10 points for shooting the yellow alien.");
    }
    else {
        console.log("Great job! You just earned 15 points for shooting a non-green and non-yellow alien.");
    }
}
