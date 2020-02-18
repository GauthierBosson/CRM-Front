import React from 'react';
import projectsServices from '../utils/projectsServices';

function ProjectDetails(props) {
  return (
    <h1>Détail projet</h1>
  )
}

ProjectDetails.getInitialProps = async ctx => {
  const { id } = ctx.query;
  
  const projectDetails = await projectsServices.getProject(id, ctx);

  return { projectDetails: projectDetails.data.doc }
}

export default ProjectDetails
