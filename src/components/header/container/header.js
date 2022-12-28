import { connect } from 'react-redux';
import Header from '../component/header';

const mapStateToProps = (state) => ({
  name: state.name,
  count: state.tasks.data.filter((i) => i.isActive === true).length,
});

export default connect(mapStateToProps)(Header);
