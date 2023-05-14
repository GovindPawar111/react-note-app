import React, { useState } from 'react';
import './App.css';
import noteModel from './models/noteModel';
import Header from './components/Header';

const demoData = [
  {
    id: (new Date).toString(),
    title: 'meeting',
    text: 'Schedule meeting with IS team.',
    color: '#dfdfdf',
    date: (new Date).toString()
  }
]

export const App = (): JSX.Element => {
  const [notes, setNotes] = useState<noteModel[]>(demoData)
  return (
    <>
      <Header />
    </>
  );
}

export default App;
