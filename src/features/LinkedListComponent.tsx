import React from 'react';
import { LinkedList, LinkedListNode } from '@/utils/linked-list';

const list = new LinkedList<string>();
list.append('A');
list.append('B');

const LinkedListComponent = () => {
  const [onClick, setOnClick] = React.useState(false);
  const [shouldMiddleExpand, setShouldMiddleExpand] = React.useState(false);
  return (
    <div className='w-full min-h-dynamic-screen bg-slate-900 text-stone-100 flex gap-2 justify-center items-center'>
      {list.toArray().map((nodeValue, index: number) => (
        <React.Fragment key={index}>
          <div
            key={index}
            onClick={() => {
              list.delete(nodeValue);
              setOnClick((prev) => !prev);
            }}
            className='grid place-items-center ring-2 ring-slate-100 w-[10rem] hover:text-2xl transition-all duration-100  rounded-xl aspect-square'
          >
            {nodeValue}
          </div>
          <button
            onClick={() => {
              list.insert(index + 1, 'X');
              setOnClick((prev) => !prev);
            }}
            className='hover:min-w-[2rem] w-auto transition-all duration-100 h-[10rem] min-w-[1rem] rounded-xl hover:bg-slate-800'
          ></button>
        </React.Fragment>
      ))}
      {/* <div className='grid place-items-center ring-2 ring-slate-100 w-[10rem] hover:text-2xl transition-all duration-100  rounded-xl aspect-square'>
        A
      </div>
      <button
        onClick={() => setShouldMiddleExpand(true)}
        className='hover:min-w-[2rem] w-auto transition-all duration-100 h-[10rem] min-w-[1rem] rounded-xl hover:bg-slate-800'
      >
        <button
          className={`${
            shouldMiddleExpand ? 'opacity-100 w-[10rem]  visible' : 'opacity-0 w-0 invisible'
          } ring-2 ring-slate-100 rounded-xl h-full grid place-items-center bg-slate-900 text-stone-100 transition-all duration-200`}
          onClick={(e) => {
            e.stopPropagation();
            setShouldMiddleExpand(false);
          }}
        >
          C
        </button>
      </button>
      <div className='grid place-items-center ring-2 ring-slate-100 w-[10rem] hover:text-2xl transition-all duration-100  rounded-xl aspect-square'>
        B
      </div> */}
    </div>
  );
};

export default LinkedListComponent;
