import { useState } from "react";
import "./App.css";
import AddNoteNew from "./Component/AddNoteNew";
import NoteLIst from "./Component/NoteLIst";
import NoteStatus from "./Component/NoteStatus";
import NoteHeader from "./Component/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes);                    => other way
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handleCompNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNote = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNote);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNoteNew onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteLIst
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            oncomplete={handleCompNote}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
