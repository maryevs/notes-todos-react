import React from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


export function CurrentNote({text, handleChange, id}) {
    return (
        <Paper>
            <TextField multiline className='currentNote'
                       rows={15}
                value={text}
                onChange={(event) => handleChange(id, event.target.value)}
            >
            </TextField>
        </Paper>
    );
}

CurrentNote.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};