import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem.js'
import AddButton from '../components/AddButton.js'

const NotesListPage = () => {
  const [notes, setNotes] = useState([])
  const [searchTopic, setSearchTopic] = useState('')

  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = async () => {
    const response = await fetch('/api/notes/')
    const data = await response.json()
    setNotes(data)
  }

  const handleSearch = (e) => {
    setSearchTopic(e.target.value)
  }

  const filteredNotes = notes.filter(note => note.topic.toLowerCase().includes(searchTopic.toLowerCase()))

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{filteredNotes.length}</p>
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Search by topic' value={searchTopic} onChange={handleSearch} />
      </div>
      <div className='notes-list'>
        {filteredNotes.map((note, index) => (
          <div className='note-preview' key={index}>
            <ListItem note={note} />
          </div>
        ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesListPage