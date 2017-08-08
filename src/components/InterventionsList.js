import React from 'react';
import { Common } from '../assets/css';

import {Link} from 'react-router'



const InterventionsList = ({interventionsList, AffichageUpdate, dialogOpen}) => { 
		return (
			<section style={Common.sectionArticle} >

				{interventionsList.map((intervention, index) =>
					<article key={index} style={Common.services} >
						<header>
							<h4 style={Common.servicesTitre} > {intervention.nom} </h4>
							<div style={Common.imgDev} >
								<img src={require('../assets/img/intervention/' + intervention.slug + '.png')} alt={intervention.titre} />
							</div>
						</header>
						<p style={Common.servicesSsTitre} > {intervention.description} </p>
						{intervention.id === dialogOpen && 
							<p> {"ici"} </p>
						}
						<div>
							<Link 
								style={Common.linkTravx} 
								onClick={ () => AffichageUpdate(intervention.id) }
							>En savoir plus !</Link>
						</div>

					</article>
				)} 

			</section>
		);
}

export default InterventionsList;