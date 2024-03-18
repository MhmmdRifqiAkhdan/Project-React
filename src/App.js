import React, { useState } from 'react';
import './App.css';

function App() {
  const initialNotes = [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z'
    }
  ];

  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState({ id: '', title: '', body: '', archived: false, createdAt: '' });

  const addNote = () => {
    if (newNote.title.trim() !== '' && newNote.body.trim() !== '') {
      const newNoteWithId = { ...newNote, id: +new Date() };
      setNotes([...notes, newNoteWithId]);
      setNewNote({ id: '', title: '', body: '', archived: false, createdAt: '' });
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
        <h1 class="title-name">Aplikasi Catatan Pribadi</h1>
        <div class="box-sizing">
          <p class="paragraph-name">Buat Catatan</p>
            <div className="form-group">
              <label htmlFor="title">Judul:</label>
              <input
                type="text"
                id="title"
                placeholder="Judul Catatan"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Deskripsi Catatan:</label>
              <textarea
                id="body"
                placeholder="Deskripsi Catatan"
                value={newNote.body}
                onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
              />
            </div>
            <div className="form-group">
              <button onClick={addNote}>Tambah Catatan</button>
            </div>
      </div>
      <hr />
      <h2 className="input-catatan">Catatan Aktif</h2>
      <div className="card-container">
        {notes.map(note => (
          <div key={note.id} className="card">
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <div className="button-group">
              <button className="btn-delete" onClick={() => deleteNote(note.id)}>Hapus</button>
              <button className="btn-archive">Arsipkan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
