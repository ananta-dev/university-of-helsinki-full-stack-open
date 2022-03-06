import { useState } from "react";
import Filter from "./components/Filter";
import AddPersonForm from "./components/AddPersonForm";
import ListPeople from "./components/ListPeople";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [personsToShow, setPersonsToShow] = useState(persons);
    const [filterString, setFilterString] = useState("");

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter
                filterString={filterString}
                setFilterString={setFilterString}
                persons={persons}
                setPersonsToShow={setPersonsToShow}
            />
            <AddPersonForm
                persons={persons}
                setPersons={setPersons}
                setPersonsToShow={setPersonsToShow}
                setFilterString={setFilterString}
            />
            <ListPeople personsToShow={personsToShow} />
        </div>
    );
};

export default App;
