import React from 'react';
import { Provider } from 'react-redux';
import {TodoApp} from "../components/Todo/TodoApp";
import {NoteApp} from "../components/Note/NoteApp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function App({store}) {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <ul  className='router'>
                        <li>
                            <Link to="/notes">Notes</Link>
                        </li>
                        <li>
                            <Link to="/todo">Todo</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={NoteApp} />
                    <Route path="/todo" component={TodoApp} />
                    <Route path="/notes" component={NoteApp} />
                </div>
            </Router>
        </Provider>
    );
}


