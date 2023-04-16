import { useState } from 'react';
import './App.css';
import Forms from './components/Forms';
import List from './components/List';

const demoRecords = [
  {
    id: '1',
    name: 'Suraj Roy',
    age: 25,
  },
  {
    id: '2',
    name: 'Nirupam Gupta',
    age: 25,
  },
  {
    id: '3',
    name: 'Dolan Mukjerjee',
    age: 20,
  },
  {
    id: '4',
    name: 'Suchismita Ojha',
    age: 21,
  },
  {
    id: '5',
    name: 'Himadri Roy',
    age: 20,
  },
]


function App() {
    const [records, setRecords] = useState(demoRecords);
const newRecord = (record) => {
  const newRecords = [record,...records];
  setRecords(newRecords);
}

  return (
    <div className="App">
      <Forms newRecord={newRecord}/>
      <List records={ records } />
    </div>
  );
}

export default App;
