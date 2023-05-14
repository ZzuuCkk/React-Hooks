import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const [movie,setMovie] = useState({})
  const [value,setValue] = useState('')

  const fetchMedicamets = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${value}`);
      setMovie(response.data);
    } catch (error) {
      alert(error?.message);
    } finally {
      setLoading(false)
    }
  }

  const buttonClick = () => {
    if (value.length < 3) {
      fetchMedicamets();
    }
  }

  useEffect(() => {
    if (value.length >= 3) {
      fetchMedicamets();
    }
  }, [value]);

  return (
    <div>
      <p>{loading ? 'its loading' : movie?.title}</p>
      <input placeholder='type id' onChange={(e) => setValue(e.target.value)} />
      <button onClick={buttonClick}>get data</button>
    </div>
  );
}

export default App;