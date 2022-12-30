import { connect } from 'react-redux';
import Tabs from '../component/tabs';
const mapStateToProps = (state) => ({ selectedTab: state.selectedTab });
const mapDispatchToProps = (dispatch) => ({
  changeTab: (tab) => dispatch({ type: 'CHANGE_TAB', tab }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
