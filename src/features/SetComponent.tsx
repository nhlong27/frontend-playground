import React from 'react';

const SetComponent = () => {
  const [selectedOptions, setSelectedOptions] = React.useState(new Set());
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let selected = e.currentTarget.innerText;
    if (selectedOptions.has(selected)) {
      selectedOptions.delete(selected);
    } else {
      selectedOptions.add(selected);
    }
    setSelectedOptions(new Set(selectedOptions));
  };
  return (
    <div className='min-h-screen w-full grid place-items-center bg-slate-900'>
      <div className='bg-slate-100 flex flex-col justify-center items-center py-8 px-4'>
        <h1>
          {selectedOptions.size === 3 ? (
            <button onClick={() => setSelectedOptions(new Set())}>All selected</button>
          ) : selectedOptions.size > 0 ? (
            selectedOptions.size
          ) : (
            'None selected'
          )}
        </h1>
        <div className='flex flex-col justify-center'>
          <button
            className={` ${selectedOptions.has('A') && 'bg-slate-200'}`}
            onClick={(e) => handleClick(e)}
          >
            A
          </button>
          <button
            className={` ${selectedOptions.has('B') && 'bg-slate-200'}`}
            onClick={handleClick}
          >
            B
          </button>
          <button
            className={` ${selectedOptions.has('C') && 'bg-slate-200'}`}
            onClick={handleClick}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetComponent;
