/* STEP 0: This is needed if you want to fill your Database with documents
/* STEP 1: INCLUDE ALL INFORMATION; WHICH IS NEEDED TO CREATE A DOCUMENT */
// Include the OPM for translating your JS-Seeds to MongoDB documents

    // Include the path where to find the SCHEMA for the seeds
 

// Include the module PASSPORT

    // Include Bcrypt to de- and encrypt pre-set passwords

        // Set the bcryptSalt rounds - Don't forget salt is a randomly generated signsequence that is attached to a password. So even, if you have an empty password, it is still possible to create a hash, because the salt will be generated


// If I want to create a USER DATABASE and want to seed it, it makes sense to create passwords, which are already in the form a normal password would have
// This means it must be hashed
// Creating a standard password

// Generating a salt

// Hashing the password


// STEP 2: Connecting to my MongoDB database to seed it with documents, which are translated from the objects in our next step 


// STEP 3: 

// Including a JS-object and saving it by translating into an MongoDB document manually


// STEP 4: Continue with Setting up your HBS-files first (Go to the VIEW-Folder: Start with the layout.hbs) and then define your routes (Go to the ROUTE-Folder)