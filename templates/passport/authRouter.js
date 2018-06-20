// STEP 1: Store all necessary modules in variables
// Retrieve my Backend Framework

// Retrieving my LOGIN handle

  // Bcrypt to encrypt passwords


// STEP 2: Defining my router

// STEP 3: Importing my used DB-Model



// STEP 4: Create a route for a LOGIN
// Start with a GET-Method to display a form to the user to enable the user to insert his/her user data


// Retrieve the User data with a POST-Method and check with the middleware 'passport.authenticate' (retrievable through the passport-module), if the User is signed up to our page

  // if the LOGIN was sucessfull redirect to this route

  // if the LOGIN was not sucessfull redirect to this route       

  // if an error occured use connec

// STEP 5: Create a route to SIGNUP
// Start with a GET-Method to display a form to the user to enable the user to insert his/her user data
// Example: A middleware which checks for the Users role


// Creating functions that will check against different roles automatically


// Replace the SIGNUP route


// Retrieve the User data with a POST-Method and catch the input with the Body-Parser middleware 

  // Store the input Body-Parser cached

  // Control, if there was an Input, if not give the User a feedback

// If there was an input, find the Object in my DB and check it

    // Is the User already signed up?

    // If the User isn't already signed up, hash the inserted password


    // Make a new User Object with the given parameter following the DB model Schema

    // Save the new object as a new document


// STEP 6: Route to LOGOUT the user


// STEP 7: Make this module accessable in my Project


// Additional things...create middleware to check the roles of your users
// This middleware must be placed above the route, where it is used to be accessable when using the route

