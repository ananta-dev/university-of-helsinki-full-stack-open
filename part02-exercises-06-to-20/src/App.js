import { useState } from "react";
import Filter from "./components/Filter";

const AddPersonForm = ({
    persons,
    setPersons,
    resetPersonsToShow,
    personsToShow,
    justToDebug,
}) => {
    const NAME_PLACEHOLDER_TEXT = "Enter name here...";
    const NUMBER_PLACEHOLDER_TEXT = "Enter phone number here...";

    const [newName, setNewName] = useState(NAME_PLACEHOLDER_TEXT);
    const [newNumber, setNewNumber] = useState(NUMBER_PLACEHOLDER_TEXT);

    const addPerson = e => {
        e.preventDefault();

        if (persons.some(person => person.name === newName)) {
            alert(`The name ${newName} is already in the phonebook`);
        } else if (persons.some(person => person.number === newNumber)) {
            alert(`The number ${newNumber} is already in the phonebook`);
        } else {
            const newPersonsArray = [
                ...persons,
                {
                    name: newName,
                    number: newNumber,
                    id: 1000 + Math.floor(Math.random() * 1000000),
                },
            ];

            setPersons(newPersonsArray);

            justToDebug();

            console.log("added to persons - persons: ", persons);
            console.log("added to persons - personsToShow: ", personsToShow);

            resetPersonsToShow();
            console.log("called resetPersonsToShow - persons: ", persons);
            console.log(
                "called resetPersonsToShow - personsToShow: ",
                personsToShow
            );
        }
    };

    const handleNameInputChange = e => {
        setNewName(e.target.value);
    };

    const clearNamePlaceholderText = e => {
        if (e.target.value === NAME_PLACEHOLDER_TEXT) {
            setNewName("");
        }
    };

    const handleNumberInputChange = e => {
        setNewNumber(e.target.value);
    };

    const clearNumberPlaceholderText = e => {
        if (e.target.value === NUMBER_PLACEHOLDER_TEXT) {
            setNewNumber("");
        }
    };

    return (
        <>
            <h2>Add a new person</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:{" "}
                    <input
                        onChange={handleNameInputChange}
                        onFocus={clearNamePlaceholderText}
                        value={newName}
                    />
                </div>
                <div>
                    number:{" "}
                    <input
                        onChange={handleNumberInputChange}
                        onFocus={clearNumberPlaceholderText}
                        value={newNumber}
                    />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
        </>
    );
};

const ListAllPeople = ({ personsToShow }) => {
    return (
        <>
            <h2>Numbers</h2>
            {personsToShow.map(person => (
                <div key={person.id}>
                    {person.name} {person.number}
                </div>
            ))}
        </>
    );
};

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [personsToShow, setPersonsToShow] = useState(persons);

    const resetPersonsToShow = () => {
        console.log("inside resetPersonsToShow() --- persons: ", persons);
        console.log(
            "inside resetPersonsToShow() --- personsToShow: ",
            personsToShow
        );

        setPersonsToShow(persons);
        console.log(
            "inside resetPersonsToShow() after calling setPersonsToShow --- persons: ",
            persons
        );
        console.log(
            "inside resetPersonsToShow() after calling setPersonsToShow --- personsToShow: ",
            personsToShow
        );
    };

    const justToDebug = () => {
        console.log("i am in justToDebug - persons: ", persons);
    };

    console.log("First console log of the App function");

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons} setPersonsToShow={setPersonsToShow} />
            <AddPersonForm
                persons={persons}
                setPersons={setPersons}
                resetPersonsToShow={resetPersonsToShow}
                personsToShow={personsToShow}
                justToDebug={justToDebug}
            />
            <ListAllPeople personsToShow={personsToShow} />
        </div>
    );
};

export default App;
