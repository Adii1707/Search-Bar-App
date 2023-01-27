import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from './Components/SearchBar';
import {data} from "./utils/data";


function App() {

  const [query, setQuery] = useState("");
const [suggestion, setSuggestion] = useState([])

  const queryhandler = useCallback((val)=>{
    setQuery(val)
  }, [])

useEffect(()=>{
if(query===""){
setSuggestion([])
}else{
  const newSuggestion = data.filter((item)=> {
   return item.name.toLocaleLowerCase().indexOf(query) !== -1? true : false;
  }).map((item)=> (item.name));
  setSuggestion(newSuggestion);
  console.log(newSuggestion);

}
}, [query])

  return (
    <div >
    <h1>Search Bar </h1>
    <h3>query {query}</h3>
       <SearchBar suggestion= {suggestion} setQuery= {queryhandler} />    
    </div>
  );
}

export default App;
