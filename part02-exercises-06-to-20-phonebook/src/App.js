import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import AddPersonForm from "./components/AddPersonForm";
import ListPeople from "./components/ListPeople";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [personsToShow, setPersonsToShow] = useState([]);
    const [filterString, setFilterString] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then(response => {
            setPersons(response.data);
            setPersonsToShow(response.data);
        });

        console.log("just executed axios");
    }, []);

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
