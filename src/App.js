import './App.css';
import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API ="http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <h1>ToDo</h1>
    </div>
  );
}

export default App;
