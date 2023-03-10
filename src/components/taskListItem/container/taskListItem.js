import { connect } from 'react-redux';
import TaskListItem from '../component/taskListItem';

const mapDispatchToProps = (dispatch) => ({
  editTask: (index, text) => dispatch({ type: 'EDIT_TASK', data: { index, text } }),
  deleteTask: (index) => dispatch({ type: 'DELETE_TASK', index }),
  changeStatus: (index) => dispatch({ type: 'CHANGE_TASK_STATUS', index }),
});

export default connect(null, mapDispatchToProps)(TaskListItem);
