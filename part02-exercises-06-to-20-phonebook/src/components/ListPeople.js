const ListPeople = ({ personsToShow }) => {
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

export default ListPeople;
