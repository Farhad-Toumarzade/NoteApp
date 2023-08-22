function NoteStatus({ notes }) {
  // derived state:
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const uncompletedNotes = allNotes - completedNotes;

  if (!allNotes) return <h2>No Notes has already been added</h2>;

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{uncompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
