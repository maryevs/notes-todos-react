import React from 'react';
import Note from './Note';
import Paper from "@material-ui/core/Paper/Paper";
import PropTypes from 'prop-types';

const NotesList = ({ notes, clickCurrentNote, currentNote }) => (
        <Paper className='paper'>
            {notes.map(note =>
                <Note
                    key={note.id}
                    {...note}
                    onClick={() => clickCurrentNote(note.id)}
                    isSelected={currentNote === note.id}
                />
            )}
        </Paper>
);

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  clickCurrentNote: PropTypes.func.isRequired,
  currentNote: PropTypes.number.isRequired
};

export default NotesList
