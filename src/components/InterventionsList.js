import React from 'react';


export const InterventionsList = ({interventionsList}) => { 
console.log(interventionsList)
		return (
			<div>
				{interventionsList.map((intervention, index) =>
	            <div key={index}>
	              <span>{intervention.id}</span>
            	</div>
        )}

			</div>
		);
}


export default InterventionsList;