import React, { useState } from 'react';

import Person from './Person';

type PersonProps = {
  person: any;
  onNextClick: any;
};

const PersonWrapper: React.FC<PersonProps> = ({ person, onNextClick }) => {
  const {spouse} = person
  const {children} = person

  if (spouse) {
    return (
      <div className="relative flex justify-center">
        <Person
          person={person}
          children={children.length ? true : false}
          onNextClick={onNextClick}
        />
        <Person person={person.spouse} spouse onNextClick={onNextClick} />
        <div className="absolute inset-auto">
            <img
              className="bg-white border-2 border-grey-500 rounded-full w-16"
              src="rings.png"
            />
          </div>
      </div>
    );
  }

  return(
    <Person person={person} children={children.length ? true : false} onNextClick={onNextClick} />
  )
};

export default PersonWrapper;
