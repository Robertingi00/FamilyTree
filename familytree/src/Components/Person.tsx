import React from 'react';

type PersonProps = {
  spouse?: Boolean;
  children?: Boolean;
  person: any;
  onNextClick: any;
};

const Person: React.FC<PersonProps> = ({
  spouse = false,
  children = false,
  person,
  onNextClick
}) => {
  const onClick = ({ target }: any) => {
    onNextClick(Number(target.id));
  };

  return (
    <div className="text-center w-full mb-4 bg-white rounded-lg overflow-hidden shadow-lg pt-2 m-2">
      <img
        className="h-32 w-32 m-auto rounded-full border-2 border-grey-500"
        src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png"
      />
      <div className="p-2">
        <h4 className="text-gray-800 text-lg font-semibold">{person.name}</h4>
        <h5>05-03-1933</h5>
      </div>
      {children && (
        <div
          id={person.id}
          className="bg-primary-200 p-2 hover:shadow-inner cursor-pointer"
          onClick={onClick}
        >
          Börn ❯
        </div>
      )}
    </div>
  );
};

export default Person;
