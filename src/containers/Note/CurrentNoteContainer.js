import { connect } from 'react-redux'
import {CurrentNote} from "../../components/Note/CurrentNote";
import {editNote} from "../../actions/Note/NoteActions";

const mapStateToProps = state => {
    return {
        text: state.notes.find((note) => {
            return note.id === state.currentNote;
        }).text,
        id: state.currentNote
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (id, text) => dispatch(editNote(id, text))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentNote);
