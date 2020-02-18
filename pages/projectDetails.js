import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

import projectsServices from '../utils/projectsServices';

function ProjectDetails(props) {
  return (
    <>
      <h1>Détail projet</h1>
      <Link href={`/addCommand?id=${props.projectDetails._id}`} >
        <Button variant="contained" >Ajouter une commande</Button>
      </Link>
    </>
  )
}

ProjectDetails.getInitialProps = async ctx => {
  const { id } = ctx.query;
  
  const projectDetails = await projectsServices.getProject(id, ctx);

  return { projectDetails: projectDetails.data.doc }
}

export default ProjectDetails
