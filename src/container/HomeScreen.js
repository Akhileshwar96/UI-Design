import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from '../components/screens/Home';

const mapStateToProps = state => {
  const {dataList} = state.dataState;

  return {
    dataList,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
