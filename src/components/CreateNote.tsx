import React, { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import noteModel from '../models/noteModel';

interface CreateNoteProps {
    notes: noteModel[],
    onSetNotes: React.Dispatch<React.SetStateAction<noteModel[]>>
}

const DEFAULT_COLOR: string = '#dfdfdf'

export const CreateNote = (props: CreateNoteProps): JSX.Element => {
    const { notes, onSetNotes } = props

    const [error, setError] = useState<string>('')

    const titleRef = useRef<HTMLInputElement | null>(null)
    const textRef = useRef<HTMLTextAreaElement | null>(null)
    const colorRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (titleRef.current?.value === '' || titleRef.current?.value === undefined) {
            return setError('Title field is mandatory')
        }
        else if (textRef.current?.value === '' || textRef.current?.value === undefined) {
            return setError('Text field is mandatory')
        }
        else if (colorRef.current?.value === undefined) {
            return
        }
        else {
            setError('');
            onSetNotes([...notes, {
                id: Date.now().toString(36),
                title: titleRef.current.value,
                text: textRef.current.value,
                color: colorRef.current?.value,
                date: (new Date).toString()
            }])
        }

        titleRef.current.value = ''
        textRef.current.value = ''
        colorRef.current.value = DEFAULT_COLOR
    }
    return (
        <>
            <h2>Create Notes</h2>
            {
                error !== '' &&
                <Alert variant='danger'>{error}</Alert>
            }
            <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className='mb-3' controlId='fromBasicTitle'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Enter Title for the Note' ref={titleRef} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='fromBasicText'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control type='text' placeholder='Enter your note' as='textarea' rows={3} ref={textRef} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control type='color' id='colorInput' defaultValue={DEFAULT_COLOR} ref={colorRef} title='Choose your color' />
                </Form.Group>
                <Button type='submit' variant='primary'>Submit</Button>
            </Form>
        </>
    );
}

export default CreateNote;