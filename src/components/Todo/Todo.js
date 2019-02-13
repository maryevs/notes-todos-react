import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text}) => {

    let className = completed ? 'todoTextDecorLine' : 'todoTextDecorNone';
    return (
        <li
            className={className}
            onClick={onClick}
        >
            {text}
        </li>
    );
};


Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
