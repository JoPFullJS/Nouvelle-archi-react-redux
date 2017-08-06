import React, {Component} from 'react';
import { connect } from 'react-redux';
import getInterventions from '../actions/getInterventions';
import { InterventionsList } from '../components';

import CircularProgress from 'material-ui/CircularProgress';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    interventions: state.intervention.interventionsList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInterventions: () => {dispatch(getInterventions())},
  }
};

class InterventionsListContainer extends Component {

  componentDidMount(){
    this.props.getInterventions()  
  }
  
  
  render() {
    const { interventions } = this.props;
    console.log(interventions)
    if(interventions != null){
        return(
        <InterventionsList interventionsList={interventions} />
      );  
    }
    else{
      return( 
        <CircularProgress />
      );
    }
       
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(InterventionsListContainer);
