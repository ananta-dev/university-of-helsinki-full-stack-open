require("dotenv").config();
const mongoose = require("mongoose");

// if (process.argv.length < 3) {
//     console.log(
//         "Please provide the password as an argument: node mongo.js <password>"
//     );
//     process.exit(1);
// }

const password = process.argv[2];

mongoose.connect(process.env.MONGODB_URL);

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//     content: "HTML is so Easy",
//     date: new Date(),
//     important: true,
// });

// note.save().then(result => {
//     console.log("note saved!");
//     mongoose.connection.close();
// });

Note.find({}).then(result => {
    console.log("\nList of notes: \n");
    result.forEach(note => {
        console.log(note);
    });
    mongoose.connection.close();
});
