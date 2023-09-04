

const Search = ({ data, dataFilter }) => {
    const inputHandle = (e) => {
        const searchWords = e.target.value.toLowerCase();

        const resultado = data.filter(
            (contributor) =>
                contributor.name.toLowerCase().includes(searchWords) ||
                contributor.mail.toLowerCase().includes(searchWords) ||
                contributor.age.includes(searchWords) ||
                contributor.position.toLowerCase().includes(searchWords) ||
                contributor.phone.includes(searchWords)
        )

        dataFilter(resultado);
    }

    return (
        <div className="form-group">
            <input
                type="text"
                name="buscador"
                id="buscador"
                placeholder="Search for a contributor"
                className="form-control mb-3"
                onChange={inputHandle}
            />
        </div>
    )
}

export default Search