import { useState } from 'react';

import './App.css';
import { fetchWeather } from './api/fetchApi';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})

  const search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);
      setWeather(data);
      console.log(data);
      setQuery('');
    }


  }

  return (
    <div className="App">
    <input type="text" placeholder="Search..." className= 'search' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}></input>
    </div>
  );
}

export default App;
