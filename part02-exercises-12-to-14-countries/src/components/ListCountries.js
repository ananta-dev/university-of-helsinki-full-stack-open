import ShowOneCountry from "./ShowOneCountry";

export default function ListCountries({
    filterString,
    countriesToShow,
    setFilterString,
    setCountriesToShow,
}) {
    const selectCountry = country => {
        setFilterString(country.name.common);
        setCountriesToShow([country]);
    };

    console.log("filterString", filterString);
    console.log("countriesToShow", countriesToShow);

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
                    <div key={country.name.official}>
                        {country.name.common}{" "}
                        <button onClick={() => selectCountry(country)}>
                            show
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}
