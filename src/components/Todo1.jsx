import { useState } from "react"


const Todo1 = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10)
      })
    })
    setInput('')
  }

  const removeTodos = id => setTodos((todos) => todos.filter((t) => t.id !== id))


  return (
  <>
      <input type="text" placeholder="Todo List" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodos(id)}>X</button>
          </li>
        ))}
      </ul>
    </>
)
}

export default Todo1