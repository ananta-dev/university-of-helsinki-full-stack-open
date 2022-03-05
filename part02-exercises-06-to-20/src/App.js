import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [newName, setNewName] = useState("Enter name here...");
    const [newNumber, setNewNumber] = useState("Enter phone number here...");
    const [filter, setFilter] = useState("");
    const [personsToShow, setPersonsToShow] = useState(persons);

    console.log("First console log of the App function");

    const handleNameInputChange = e => {
        setNewName(e.target.value);
    };

    const handleNumberInputChange = e => {
        setNewNumber(e.target.value);
    };

    const addPerson = e => {
        e.preventDefault();

        if (persons.some(person => person.name === newName)) {
            alert(`The name ${newName} is already added to phonebook`);
        } else if (persons.some(person => person.number === newNumber)) {
            alert(`The number ${newNumber} is already on the phonebook`);
        } else {
            setPersons([
                ...persons,
                {
                    name: newName,
                    number: newNumber,
                },
            ]);
        }
    };

    const Filter = () => {
        const handleFilterChange = e => {
            const newFilter = e.target.value;
            if (newFilter === "") {
                setPersonsToShow(persons);
                console.log("setPersonsToShow just executed");
            } else {
                setPersonsToShow(
                    persons.filter(person =>
                        person.name
                            .toUpperCase()
                            .includes(newFilter.toUpperCase())
                    )
                );
                console.log("setPersonsToShow just executed");
            }
            setFilter(newFilter);
            console.log("setFilter just executed");
        };

        return (
            <div>
                filter shown with{" "}
                <input onChange={handleFilterChange} value={newFilter} />
            </div>
        );
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter />
            <h2>Add a new entry</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:{" "}
                    <input
                        onChange={handleNameInputChange}
                        onFocus={() => {
                            setNewName("");
                        }}
                        value={newName}
                    />
                </div>
                <div>
                    number:{" "}
                    <input
                        onChange={handleNumberInputChange}
                        onFocus={() => {
                            setNewNumber("");
                        }}
                        value={newNumber}
                    />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {personsToShow.map(person => (
                <div key={person.id}>
                    {person.name} {person.number}
                </div>
            ))}
        </div>
    );
};

export default App;
