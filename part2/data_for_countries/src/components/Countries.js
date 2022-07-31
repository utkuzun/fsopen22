
import Country from "./Country";

const Countries = ({filtered})=>{

    if (filtered.length >=10) {
        return <p>Too many matches, specify another filter</p>
    }

    if (filtered.length === 0) {
        return <p>no country found on this query!!!</p>
    }

    return <>
        {filtered.map(country => <Country country={country} filtered={filtered} key={country.capital} />)}
    </>

}

export default Countries