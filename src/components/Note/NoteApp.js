import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotesListContainer from "../../containers/Note/NotesListContainer";
import AddNoteButtonContainer from "../../containers/Note/AddNoteButtonContainer";
import CurrentNoteContainer from "../../containers/Note/CurrentNoteContainer";


export class NoteApp extends React.Component {
    render() {
            return (
                <Paper>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <NotesListContainer/>
                            <AddNoteButtonContainer/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8} lg={10}>
                            <CurrentNoteContainer/>
                        </Grid>
                    </Grid>
                </Paper>
            );
        }
}
