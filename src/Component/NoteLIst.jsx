function NoteLIst({ notes, onDelete, oncomplete, sortBy }) {
  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    ); // a - b => a > b ? 1 : -1

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createAt) - new Date(a.createAt)
    ); // b - a => a > b ? -1 : 1

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          oncomplete={oncomplete}
        />
      ))}
    </div>
  );
}

export default NoteLIst;

function NoteItem({ note, onDelete, oncomplete }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.desc}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>#</button>
          <input
            onChange={oncomplete}
            checked={note.completed}
            value={note.id}
            type="checkbox"
            name={note.id}
            id={note.id}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
