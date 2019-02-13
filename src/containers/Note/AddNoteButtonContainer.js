import { connect } from 'react-redux'
import { addNote } from '../../actions/Note/NoteActions'
import {AddNoteButton} from "../../components/Note/AddNoteButton";

const mapDispatchToProps = dispatch => {
    return {
        click: () => dispatch(addNote())
    }
};

export default connect(() => ({}), mapDispatchToProps)(AddNoteButton)
