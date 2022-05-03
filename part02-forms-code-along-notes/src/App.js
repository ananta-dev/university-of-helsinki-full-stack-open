import { useState, useEffect } from "react";
import Note from "./components/Note";
import axios from "axios";
import noteService from "./services/notes";

const App = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("Type new note here...");
    const [showAll, setShowAll] = useState(true);

    const notesToShow = showAll ? notes : notes.filter(note => note.important);

    // prettier-ignore
    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes);
            });
    }, []);

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id);
        const changedNote = { ...note, important: !note.important };

        // prettier-ignore
        noteService
            .update(id, changedNote).then(returnedNote => {
                setNotes(notes.map(note => (note.id !== id ? note : returnedNote)));
            })
            .catch(error => {
                alert(
                    `the note '${note.content}' was already deleted from the server`
                )
                setNotes(notes.filter(n => n.id !== id))
            })
    };

    const addNote = event => {
        event.preventDefault();
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
        };

        // prettier-ignore
        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote));
                setNewNote("");
            });
    };

    const handleNoteChange = event => {
        setNewNote(event.target.value);
    };

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? "important" : "all"}
                </button>
            </div>
            <ul>
                {notesToShow.map(note => (
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                ))}
            </ul>
            <form onSubmit={addNote}>
                <input
                    onFocus={() => setNewNote("")}
                    onChange={handleNoteChange}
                    value={newNote}
                />
                <button type='submit'>save</button>
            </form>
        </div>
    );
};

export default App;
