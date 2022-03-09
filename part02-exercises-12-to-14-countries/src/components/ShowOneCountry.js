import Weather from "./Weather";

export default function ShowOneCountry({ country }) {
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
            <Weather country={country} />
        </div>
    );
}
