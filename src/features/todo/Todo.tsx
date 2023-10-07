import React from 'react'

const Todo = () => {
  const [todo, setTodo] = React.useState('')
  const [todos, setTodos] = React.useState<string[]>([])
  const addTodo = useAddTodo();
  React.useEffect(()=>{
    setTodos(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')!) : [] )
  }, [addTodo.isLoading])
  return (
    <div>
      <h1>Todo List App</h1>
      <input type='text' value={todo} onChange={(e)=>setTodo(e.currentTarget.value)} />
      <button onClick={()=>{
        addTodo.mutation([...todos, todo])
        setTodo('')
      }}>Add</button>
      <ul>
        {todos.map(todo=><li>{todo}</li>)}
      </ul>
    </div>
  )
}

const useAddTodo = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const mutation = (todos: string[]) => {
    setIsLoading(true)
    localStorage.setItem('todos', JSON.stringify(todos))
    setTimeout(()=>{
      setIsLoading(false)
    }, 2000)
  }
  return { isLoading, mutation }
}
export default Todo