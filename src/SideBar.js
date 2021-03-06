function SideBar ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) {
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notebook</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">

                {notes.map((note) => {
                
                return <div className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                    onClick={() => setActiveNote(note.id)}>
                    <div className="-sidebar-note-title">
                        <strong>{note.title}   </strong>
                        <button onClick={() => onDeleteNote(note.id)}>DELETE</button>
                    </div>


                    <p>{note.body && note.body.substr(0, 100) + '...'}</p>

                    <small className="note-meta">{new Date(note.lastModified).toLocaleDateString("en-GB",{
                        hour: "2-digit",
                        minute: "2-digit"
                    })}</small>
                </div>
                })}
        </div>
    </div>

               
        
    )
}

export default SideBar;