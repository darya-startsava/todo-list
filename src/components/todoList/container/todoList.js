import { connect } from 'react-redux';
import TodoList from '../component/todoList';

const mapStateToProps = (state) => ({
  name: state.name,
  count: state.tasks.data.filter((i) => i.isActive === true).length,
});

export default connect(mapStateToProps)(TodoList);
