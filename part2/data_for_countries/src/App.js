import {useState, useEffect} from "react"
import axios from "axios"
import Countries from "./components/Countries"

function App() {

  const [query, setQuery] = useState("")
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])


  useEffect(()=> {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])


  useEffect(()=> {
    const newFiltered = countries.filter((country) => country.name.common.toLowerCase().includes(query))
    setFiltered(newFiltered)
  }, [query, countries])

  const onQueryChange = (e)=> {
    setQuery(e.target.value)
  }

  return <>
    <div>find countries <input value={query} onChange={onQueryChange}/></div>
    <Countries filtered={filtered} />
  
  </>;
}

export default App;
