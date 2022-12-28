import { connect } from 'react-redux';
import Form from '../component/form';

const mapSDispatchToProps = (dispatch) => ({
  enterName: (text) => dispatch({ type: 'ENTER_NAME', text }),
  addNewTask: (text) => dispatch({ type: 'ADD_NEW_TASK', text }),
});

export default connect(null, mapSDispatchToProps)(Form);
