import { connect } from 'react-redux';
import NotesList from '../../components/Note/NotesList';
import {currentNote} from "../../actions/Note/NoteActions";

const mapStateToProps = state => ({
        notes: state.notes,
        currentNote: state.currentNote
});

const mapDispatchToProps = dispatch => {
    return {
        clickCurrentNote: (id) => dispatch(currentNote(id))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesList);
