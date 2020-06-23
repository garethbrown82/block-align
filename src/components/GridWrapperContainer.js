import { connect } from 'react-redux';
import { GridWrapperComponent } from './GridWrapperComponent';
import { countUp } from '../reducers/gameActions';

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  countUp: () => dispatch(countUp()),
});

export const GridWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GridWrapperComponent)