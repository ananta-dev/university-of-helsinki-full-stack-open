import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import ListCountries from "./components/ListCountries";

function App() {
    const [allCountries, setAllCountries] = useState([]);
    const [countriesToShow, setCountriesToShow] = useState([]);
    const [filterString, setFilterString] = useState("");

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(response => {
            setAllCountries(response.data);
            setCountriesToShow(response.data);
        });
    }, []);

    console.log("allCountries: ", allCountries);
    console.log("countriesToShow: ", countriesToShow);

    return (
        <div>
            <Filter
                filterString={filterString}
                setFilterString={setFilterString}
                setCountriesToShow={setCountriesToShow}
                allCountries={allCountries}
            />
            {}
            <ListCountries
                filterString={filterString}
                countriesToShow={countriesToShow}
                setCountriesToShow={setCountriesToShow}
                setFilterString={setFilterString}
            />
        </div>
    );
}

export default App;
