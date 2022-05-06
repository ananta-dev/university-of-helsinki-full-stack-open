import phonebookService from "../services/phonebookService";

const ListPeople = ({
    persons,
    setPersons,
    personsToShow,
    setPersonsToShow,
}) => {
    const deleteEntry = person => {
        if (window.confirm(`Delete ${person.name} ?`)) {
            phonebookService.deleteEntry(person.id).then(response => {
                setPersons(persons.filter(p => p.id !== person.id));
                setPersonsToShow(personsToShow.filter(p => p.id !== person.id));
            });
        }
    };

    return (
        <>
            <h2>Numbers</h2>
            {personsToShow.map(person => (
                <div key={person.id}>
                    {person.name} {person.number} {"   "}
                    <button onClick={() => deleteEntry(person)}>delete</button>
                </div>
            ))}
        </>
    );
};

export default ListPeople;
