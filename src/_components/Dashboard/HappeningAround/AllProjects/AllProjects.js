import React from 'react';
import PropTypes from 'prop-types';

const AllProjects = () => {
    return (
        <div className="card rounded card-spacing">
            <h6 className="font-weight-bold mb-0 text-extra-muted">ALL PROJECTS</h6>
            <h1 className="mb-0 custom-font font-weight-bold">24</h1>
        </div>
    );
};

AllProjects.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default AllProjects;
