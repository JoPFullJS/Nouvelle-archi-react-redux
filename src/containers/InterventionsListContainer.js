import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getInterventions} from '../actions/getInterventions';
import {InterventionsList} from '../components/InterventionsList';


const mapStateToProps = (state) => {
  return {
    interventionsList: state.intervention.interventionsList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInterventions: () => {dispatch(getInterventions())},
  }
};

class InterventionsListContainer extends Component {

  componentWillMount(){
    console.log('GrandChild did mount.');
    this.props.getInterventions();
  }


  render() {
    const { interventionsList } = this.props;
      if(interventionsList != null){
          return (
            <InterventionsList interventionsList={ interventionsList } />
  	      );
      }
      else{
        return(console.log('Loading...'));
        
      }
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterventionsListContainer)
