const Filter = ({
    filterString,
    setFilterString,
    setCountriesToShow,
    allCountries,
}) => {
    const handleFilterChange = e => {
        const newFilter = e.target.value;
        if (newFilter === "") {
            setCountriesToShow(allCountries);
        } else {
            setCountriesToShow(
                allCountries.filter(country =>
                    country.name.common
                        .toUpperCase()
                        .includes(newFilter.toUpperCase())
                )
            );
        }
        setFilterString(newFilter);
    };

    return (
        <div>
            find countries{" "}
            <input onChange={handleFilterChange} value={filterString} />
        </div>
    );
};

export default Filter;
