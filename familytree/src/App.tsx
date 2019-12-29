import React, { useState } from 'react';

import './Css/index.css';
import logo from './logo.svg';

import data from './Data/data';

import Header from './Components/Header';
import PersonWrapper from './Components/PersonWrapper';

const App: React.FC = () => {
  const [memory, setMemory]: Array<any> = useState([]);
  const [people, setPeople]: Array<any> = useState(data);

  const onNextClick: any = (id: Number) => {
    const x: any = people.find((person: any) => {
      if (person.id === id) {
        return person;
      }
    });
    setMemory([...memory, people]);
    setPeople(x.children);
  };

  const onBackClick: any = () => {
    if (!memory.length) return;
    console.log(memory[memory.length - 1]);
    setPeople(memory[memory.length - 1]);
    setMemory(memory.slice(0, -1));
  };
  return (
    <div className="bg-neutrals-100 min-h-screen font-sans">
      <Header />
      <div className="relative">
        {memory.length !== 0 && (
          <h4
            className="p-2 text-lg cursor-pointer hover:font-semibold"
            onClick={onBackClick}
          >
            ❮ Til baka
          </h4>
        )}

        {people.map((person: any) => (
          <PersonWrapper person={person} onNextClick={onNextClick} />
        ))}
        {/* <Person />
        <div className="relative flex justify-center">
          <Person />
          <Person spouse />
          <div className="absolute inset-auto">
            <img
              className="bg-white border-2 border-grey-500 rounded-full w-16"
              src="rings.png"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;
