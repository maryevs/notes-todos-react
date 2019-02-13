import Button from "@material-ui/core/Button/Button";
import React from "react";
import PropTypes from 'prop-types';

export const AddNoteButton = ({click}) => (
    <Button className='btn'
        onClick={click}
    >
        Add note
    </Button>
);

AddNoteButton.propTypes = {
  click: PropTypes.func.isRequired
};