/* There are three important Steps to setup Passport
    1. STEP: SET UP A LOCAL STRATEGY TO HANDLE THE LOGIN
    2. STEP: SERIALIZE THE USER
    3. STEP: DESERIALIZE THE USER

THIS IS THE FIRST STEP: SET UP A LOCAL STRATEGY TO HANDLE THE LOGIN
   This file explains how the module Passport handles and controll logins */

// STEP 1: Include all modules you need for a login-in Strategy for PASSPORT
// The module itself


  // A variable, which acts like a Strategy Constructor
 
  // bcyrypt package to translate the input password comparable to the stored one 
 
  // The User model as an access to our MongoDB database 
 
// STEP 2: Defining the LocalStrategy

  // Find a User with the name the user inserted in the login-form

    // If an error occurs, go to the next

    // If the User is not found, give a feedback to the User


    // If the inserted Password doesn't correspond to the stored Password in the User-DB inform the User

    // If the User is found and the Passwords correspond, allow access and go to the next


// STEP 3: Go to the next STEP SERIALIZING the User in serializers.js