import { connect } from 'react-redux';
import Form from '../component/form';

const mapStateToProps = (state, props) => ({
  prevText: state.tasks.data.find((i) => i.key === props?.index)?.text ||'',
});

const mapSDispatchToProps = (dispatch) => ({
  enterName: (text) => dispatch({ type: 'ENTER_NAME', text }),
  addNewTask: (text) => dispatch({ type: 'ADD_NEW_TASK', text }),
});

export default connect(mapStateToProps, mapSDispatchToProps)(Form);
