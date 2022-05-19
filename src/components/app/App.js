import React, { Fragment } from 'react';
import './app.css';
import '../../globals.css';

import { TodoList } from '../todo/todoList';

export default function App() {
  return (
    <Fragment>
      <TodoList />
    </Fragment>
  );
}
