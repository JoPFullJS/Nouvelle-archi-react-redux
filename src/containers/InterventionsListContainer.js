import React, {Component} from 'react';
import { connect } from 'react-redux';
import getInterventions from '../redux/actions/getInterventions';
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

    state = {
      open: null
    };

  componentDidMount(){
    this.props.getInterventions();
  }


  AffichageUpdate = (idMessage) => {

    this.setState({
      open: idMessage
    });
  }
  
  render() {
 
    const { interventions } = this.props;

    if(interventions != null){
        return(
        <InterventionsList 
          interventionsList={interventions} 
          AffichageUpdate={this.AffichageUpdate}
          dialogOpen={this.state.open}
        />
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
