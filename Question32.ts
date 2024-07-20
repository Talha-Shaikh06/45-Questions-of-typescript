{let current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'Eve'];
{
    let new_users: string[] = ['Eric', 'john', 'Alice', 'Mallory', 'Dave'];

// Convert current_users to lowercase for case-insensitive comparison
{
    let current_users_lower: string[] = current_users.map(username => username.toLowerCase());

// Loop through new_users to check for unique usernames
for (let new_username of new_users) {
   {
     let new_username_lower = new_username.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    // Check if the new username is already used
    if (current_users_lower.indexOf(new_username_lower) !== -1) {
        console.log(`Sorry, the username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
}
}
}
}