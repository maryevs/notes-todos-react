import {connect} from 'react-redux';
import {setVisibilityFilter} from '../../actions/Todo/TodoActions';
import Link from '../../components/Todo/TodoLink';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
