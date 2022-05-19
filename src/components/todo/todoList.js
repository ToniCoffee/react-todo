import React, { useState, Fragment } from 'react';
import { TodoForm } from './todoForm';
import { Todo } from './todo';

export const TodoList = props => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos( prev => prev.map(item => (
      item.id === todoId ? newValue : item
    )));
  };

  const removeTodo = id => {
    // Obtiene todos los To-do menos el que se va a eliminar
    const newTodos = [...todos].filter(todo => todo.id !== id);

    // Establece de nuevo los to-dos en el nuevo array
    setTodos(newTodos);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <Fragment>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </Fragment>
  );
};
