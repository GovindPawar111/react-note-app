import React from 'react'
import { Card } from 'react-bootstrap'

interface EmptyNoteMessageProps {}
export const EmptyNoteMessage = (props: EmptyNoteMessageProps): JSX.Element => {
	return (
		<div className='mb-3'>
			<Card style={{ backgroundColor: '#ededed' }}>
				<Card.Body>
					<Card.Text>Note Book is Empty.</Card.Text>
					<Card.Subtitle className='text-muted'>
						You can add some note from below.
					</Card.Subtitle>
				</Card.Body>
			</Card>
		</div>
	)
}

export default EmptyNoteMessage
