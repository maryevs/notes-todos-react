import {ADD_NOTE, EDIT_NOTE, CURRENT_NOTE} from "../../actions/Note/NoteActions";

export const notes = (state = [{id: 0, text: ''}], action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case EDIT_NOTE:
            return state.map( note => {
                if (note.id === action.id) {
                    return {id: action.id, text: action.text};
                } else {
                    return note;
                }
            });

        default:
            return state;
    }
};

export const currentNote = (state = 0, action) => {
    if (action.type === CURRENT_NOTE) {
        return action.id;
    } else {
        return state;
    }
};
