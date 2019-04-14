import React from 'react';
// import PropTypes from 'prop-types';

const ActiveProjects = () => {
    return (
        <div className="card rounded bg-primary text-white card-spacing">
            <h6 className="font-weight-bold mb-0 opac-5">ACTIVE PROJECTS</h6>
            <h1 className="mb-0 custom-font font-weight-bold">8</h1>
        </div>
    );
};

ActiveProjects.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default ActiveProjects;
