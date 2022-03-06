import { useState } from "react";

const Filter = ({ setPersonsToShow, persons }) => {
    const [filter, setFilter] = useState("");

    const handleFilterChange = e => {
        const newFilter = e.target.value;
        if (newFilter === "") {
            setPersonsToShow(persons);
            console.log("setPersonsToShow just executed");
        } else {
            setPersonsToShow(
                persons.filter(person =>
                    person.name.toUpperCase().includes(newFilter.toUpperCase())
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
            <input onChange={handleFilterChange} value={filter} />
        </div>
    );
};

export default Filter;
