import React from 'react'
import noteModel from '../models/noteModel'
import { Button, Card } from 'react-bootstrap'

interface NoteProps {
	note: noteModel
	onHandleDelete: (id: string) => void
}

export const Note = (props: NoteProps): JSX.Element => {
	const { note, onHandleDelete } = props
	return (
		<div className='mb-3'>
			<Card style={{ backgroundColor: note.color }}>
				<Card.Body>
					<Card.Title>{note.title}</Card.Title>
					<Card.Text>{note.text}</Card.Text>
					<Card.Subtitle className='text-muted'>
						{note.date}
					</Card.Subtitle>
					<Button
						className='mt-3'
						variant='danger'
						onClick={() => onHandleDelete(note.id)}
					>
						Delete
					</Button>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Note
