import React from 'react';
import noteModel from '../models/noteModel';
import Note from './Note';

interface NoteListProps {
    notes: noteModel[]
    onHandleDelete: (id: string) => void
}

export const NotesList: React.FC<NoteListProps> = (props: NoteListProps) => {
    const { notes, onHandleDelete } = props

    return (
        <div>{
            notes.map(note => {
                return (
                    <Note key={note.id} note={note} onHandleDelete={onHandleDelete} />
                )
            })
        }</div>
    )
}

export default NotesList;