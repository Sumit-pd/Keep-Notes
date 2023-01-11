import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes(
            (prevVal) => {
                return [
                    ...prevVal,
                    newNote
                ];
            }
        );
    }
    function deleteNote(id) {
        setNotes(prevVal => {
            return prevVal.filter( (val , ind) =>{
                return ind != id ;
            });


        }) ;
    }
    return (
        <div>
            <Header />
            <CreateArea addVal={addNote} />
            {notes.map((note , index) => {
                return <Note key = {index} ind = {index}title={note.title} content={note.content} onDelete={deleteNote} />
            })}
            <Footer />
        </div>
    );
}

export default App;
