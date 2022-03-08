import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";

const ShowOneCountry = ({ country }) => {
    return (
        <div>
            {" "}
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h3>languages</h3>
            <ul>
                {Object.entries(country.languages).map(
                    (languageIdName, index) => (
                        <li key={index}>{languageIdName[1]}</li>
                    )
                )}
            </ul>
            <img src={country.flags.png} height='150px' alt='' />
        </div>
    );
};

// <ul>
//     {Object.entries(country.languages).map((languageIdName, index) => (
//         <li key={index}>{languageIdName[1]}</li>
//     ))}
// </ul>;

const ListCountries = ({ filterString, countriesToShow }) => {
    if (filterString === "") {
        return <div>Please enter some text to search countries</div>;
    } else if (countriesToShow.length > 10) {
        return <div>Too many matches, specify another filter</div>;
    } else if (countriesToShow.length === 0) {
        return (
            <div>No country found with a name that contains that string</div>
        );
    } else if (countriesToShow.length === 1) {
        return <ShowOneCountry country={countriesToShow[0]} />;
    } else {
        return (
            <div>
                {countriesToShow.map(country => (
                    <div key={country.name.official}>{country.name.common}</div>
                ))}
            </div>
        );
    }
};

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
            />
        </div>
    );
}

export default App;
