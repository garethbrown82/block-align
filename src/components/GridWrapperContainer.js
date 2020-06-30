import { connect } from 'react-redux';
import { GridWrapperComponent } from './GridWrapperComponent';
import { updateGrid } from '../reducers/gameActions';

const mapDispatchToProps = (dispatch) => ({
  updateGrid: (index) => dispatch(updateGrid(index)),
});

export const GridWrapper = connect(
  null,
  mapDispatchToProps,
)(GridWrapperComponent)