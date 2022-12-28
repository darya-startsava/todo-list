import { connect } from 'react-redux';
import TaskList from '../component/taskList';

const mapStateToProps = (state) => ({
  data: state.tasks.data,
  selectedTab: state.selectedTab,
});

export default connect(mapStateToProps)(TaskList);
