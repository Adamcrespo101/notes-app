import {useState} from 'react'
import uuid from 'react-uuid';
import './App.css';
import SideBar from './SideBar';
import Main from './Main';

function App() {

  const [notes, setNotes] = useState([])

  function onAddNote  (e) {
    console.log(e)
    const newNote = {
      id : uuid(),

      title: "untitled note",

      body: "",

      lastModified: Date.now()
    }
    return setNotes([newNote, ...notes])
  }


  return (
    <div className='App'> 
    <SideBar notes={notes} onAddNote={onAddNote} />
    <Main />
    
    </div>
    
  );
}

export default App;
