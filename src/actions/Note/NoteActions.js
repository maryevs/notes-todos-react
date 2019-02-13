export const ADD_NOTE = 'ADD_NOTE';
export const CURRENT_NOTE = 'CURRENT_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';


let nextNoteId = 1;
export const addNote = () => ({
    type: ADD_NOTE,
    id: nextNoteId++,
    text: ''
});

export const currentNote = id => ({
    type: CURRENT_NOTE,
    id
});

export const editNote = (id, text) => ({
    type: EDIT_NOTE,
    id,
    text
});
