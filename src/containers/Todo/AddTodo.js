import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/Todo/TodoActions';
import Button from "@material-ui/core/es/Button/Button";
import Input from "@material-ui/core/es/Input/Input";


const AddTodo = ({dispatch}) => {
    let input = '';

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.trim()) {
                    return;
                }
                dispatch(addTodo(input));
                input = '';
            }}>
                <Input onChange={(event) => {
                    input = event.target.value;
                }}/>
                <Button  className='btn'
                    type="submit"
                >
                    Add Todo
                </Button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
