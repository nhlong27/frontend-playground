import React from 'react';

const StackComponent = () => {
  const [undoStack, setUndoStack] = React.useState(new Array());
  const [redoStack, setRedoStack] = React.useState(new Array());
  const [todos, setTodos] = React.useState(new Array('A', 'B', 'C'));

  const template = new Map(todos.map((text, index) => [text, index]));

  const handleDelete = (index: number) => {
    let currentTodo = todos[index];
    setUndoStack(undoStack.concat(currentTodo));
    //@ts-ignore
    setTodos(todos.toSpliced(index, 1));
  };

  const handleUndo = () => {
    let undo = undoStack.slice(-1);
    if (undo) {
      setUndoStack(undoStack.slice(0, -1));
      setRedoStack(redoStack.concat(undo));
      //@ts-ignore
      setTodos(todos.toSpliced(template.get(undo), 0, undo));
    }
  };
  const handleRedo = () => {
    let redo = redoStack.slice(-1);
    if (redo) {
      setRedoStack(redoStack.slice(0, -1));
      setUndoStack(undoStack.concat(redo));
      //@ts-ignore
      setTodos(todos.toSpliced(template.get(redo), 1));
    }
  };

  return (
    <div className='min-h-screen w-full grid place-items-center bg-slate-900'>
      <div className='bg-slate-100 flex flex-col justify-center items-center py-8 px-4'>
        <h1>
          Undo: {undoStack.join(',')}
          <br /> Redo: {redoStack.join(',')}
        </h1>
        <div>
          <button onClick={handleUndo}>Undo</button>
          <br />
          <button onClick={handleRedo}>Redo</button>
        </div>
        <div className='flex flex-col justify-center'>
          {todos.map((todo, index) => (
            <button key={index} onClick={() => handleDelete(index)}>
              {todo}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackComponent;
