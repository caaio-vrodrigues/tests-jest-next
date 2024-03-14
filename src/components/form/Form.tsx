import React, { FormEvent, useState } from "react";

export const Form = () => {
  const [todos, setTodos] = useState<string[]>(['Todo Standard']);
  const [item, setItem] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!item) return;

    setTodos(lastVal => [...lastVal, item])
    setItem('');
  };

  return (
    <div className={`border border-white p-3 text-center`}>
      <form onSubmit={handleSubmit}>
        <input 
          className={`text-black p-1`}
          type="text" 
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="New Todo"  
          autoFocus
        />
        <button 
          data-testid='form-button'
          className={`cursor-pointer ml-1`}
          type="submit"
          disabled={!item ? true : false}>
          Submit
        </button>
      </form>
      <br /><br />
      <div>
        {todos.map(todo => <article key={todo}>{todo}</article>)}
      </div>
    </div>
  );
};