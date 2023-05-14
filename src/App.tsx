import React, { useState } from 'react';
import noteModel from './models/noteModel';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNote from './components/CreateNote';
import EmptyNoteMessage from './components/EmptyNoteMessage';

export const App = (): JSX.Element => {
	const [notes, setNotes] = useState<noteModel[]>([])

	const handleDelete = (id: string) => {
		setNotes(notes.filter(note => note.id !== id))
	}
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col>
						<h2 style={{ marginTop: '100px' }}>
							Notes
						</h2>
						{
							notes.length > 0 
							? <NotesList notes={notes} onHandleDelete={handleDelete} /> 
							: <EmptyNoteMessage />
						}
					</Col>
				</Row>
				<Row>
					<Col>
						<CreateNote notes={notes} onSetNotes={setNotes} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
