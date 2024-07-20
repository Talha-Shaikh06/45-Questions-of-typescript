{let usernames: string[] = ['admin', 'Ayesha', 'Safa', 'Sarah', 'Isra'];

// Loop through the array and print greetings
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
}