import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


const Note = ({onClick, text, isSelected, cut = 20}) => {
    let className = isSelected ? 'paper gray': 'paper white';

    if (text.length === 0) {
        text = 'Enter note...';
        className += ' grayItalic';
    }
    return <Grid item xs={12}>
            <div className={className}
                onClick={onClick}
            >
                {(text.length < cut) ? text : text.slice(0, cut) + '...'}
            </div>
    </Grid>
};

Note.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  cut: PropTypes.number
};

export default Note;

