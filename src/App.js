import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List - with REDUX!</h1>
      <h2>Quack, quack!</h2>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
