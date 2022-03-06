import { useState } from "react";

const Filter = ({ setPersonsToShow, persons }) => {
    const [filter, setFilter] = useState("");

    const handleFilterChange = e => {
        const newFilter = e.target.value;
        if (newFilter === "") {
            setPersonsToShow(persons);
        } else {
            setPersonsToShow(
                persons.filter(person =>
                    person.name.toUpperCase().includes(newFilter.toUpperCase())
                )
            );
        }
        setFilter(newFilter);
    };

    return (
        <div>
            filter shown with{" "}
            <input onChange={handleFilterChange} value={filter} />
        </div>
    );
};

export default Filter;
