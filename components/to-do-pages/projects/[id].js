import React from 'react';
import Navbar from '../../Layouts/Navbar';
import Footer from '../../Layouts/Footer';
import DetailsContent from '../../ProjectDetails/DetailsContent';
import { withRouter } from 'next/router';
import { getSpecificProject } from '../../../service/service';
import Banner from '../../ProjectDetails/Banner';

const ProjectDetails = ({ project }) => {
    return (
        <>
            <Navbar />
            <Banner />
            <DetailsContent project={project} />
            <Footer />
        </>
    );
};

ProjectDetails.getInitialProps = async (ctx) => {
    let { id } = ctx.query;
    if (id === undefined) id = 'str';
    const res = await getSpecificProject(id);
    return { project: res.data };
};
export default withRouter(ProjectDetails);
