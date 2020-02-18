import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

import projectsServices from '../utils/projectsServices';
import commandsServices from '../utils/commandsServices';

function ProjectDetails(props) {
  return (
    <>
      <h1>Détail projet</h1>
      {props.commands.map((command, index) => {
        return (
          <Button variant="contained" color="primary">Commande {index}</Button>
        )
      })}
      <Link href={`/addCommand?id=${props.projectDetails._id}`} >
        <Button variant="contained" >Ajouter une commande</Button>
      </Link>
    </>
  )
}

ProjectDetails.getInitialProps = async ctx => {
  const { id } = ctx.query;
  
  const projectDetails = await projectsServices.getProject(id, ctx);
  const commands = await commandsServices.getCommandsByProject(id, ctx);

  return { 
    projectDetails: projectDetails.data.doc,
    commands: commands.data.data.doc
  }
}

export default ProjectDetails
