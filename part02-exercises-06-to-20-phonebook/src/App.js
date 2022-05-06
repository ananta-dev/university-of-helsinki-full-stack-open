import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import AddPersonForm from "./components/AddPersonForm";
import ListPeople from "./components/ListPeople";
import phonebookService from "./services/phonebookService";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [personsToShow, setPersonsToShow] = useState([]);
    const [filterString, setFilterString] = useState("");

    useEffect(() => {
        phonebookService.getAll().then(response => {
            // console.log("response from getAll: ", response);
            setPersons(response.data);
            setPersonsToShow(response.data);
        });
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
                personsToShow={personsToShow}
                setPersonsToShow={setPersonsToShow}
                setFilterString={setFilterString}
            />
            <ListPeople
                persons={persons}
                setPersons={setPersons}
                personsToShow={personsToShow}
                setPersonsToShow={setPersonsToShow}
            />
        </div>
    );
};

export default App;
