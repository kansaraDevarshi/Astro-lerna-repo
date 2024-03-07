import React, { useState } from 'react';
import { useMutation } from '@apollo/client/react/hooks';
import { ADD_TODO } from '../service/todos';

interface ITodo {
  id: string;
  title: string;
}

const DisplayData: React.FC<{ userId: string }> = ({ userId }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [input, setInput] = useState('');
  const [addTodoMutation, { error }] = useMutation<{ addTodo: ITodo }>(ADD_TODO);

  const addTodo = async () => {
    try {
      const res = await addTodoMutation({
        variables: {
          input: {
            title: input,
            userId: userId,
          },
        },
      });

      if (res && res.data && res.data.addTodo) {
        setTodos([...todos, res.data.addTodo]);
        setInput('');
      }
    } catch (ex) {
      console.error('Error adding todo:', ex);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  return (
    <div>
      <input type='text' placeholder='Ex: Play Football' value={input} onChange={handleChange} />
      <button onClick={addTodo}>ADD</button>

      {error && <p>Error adding todo: {error.message}</p>}

      <ul>
        {todos.map((todo: ITodo, idx: number) => (
          <li key={idx}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
