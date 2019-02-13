import React from 'react';
import Footer from './TodoFooter';
import AddTodo from '../../containers/Todo/AddTodo';
import VisibleTodoList from '../../containers/Todo/VisibleTodoList';

export const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);


