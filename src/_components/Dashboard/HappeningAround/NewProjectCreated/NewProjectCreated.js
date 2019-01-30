import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const NewProjectCreated = () => {
    return (
        <div className="card rounded card-spacing card-success">
            <h6 className="font-weight-bold text-extra-muted">NEW PROJECT CREATED</h6>
            <div className="project-cntr">
                <div className="floating-cntr">
                    <IconButton aria-label="Copy">
                        <Icon>arrow_forward</Icon>
                    </IconButton>
                </div>
                <h4 className="font-weight-bold text-secondary"><strong>FITCH</strong></h4>
                <p className="text-muted pr-5">Design Credit Rating Application with great User Experience </p>
                <Grid container alignItems="center" className="avatar-grid">
                    <Avatar alt="Remy Sharp" src="users/carol.jpg" className="avatar" />
                    <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar" />
                </Grid>
                <div className="mt-3">
                    <span className="badge badge-pill badge-border text-muted">UX</span>
                    <span className="badge badge-pill badge-border text-muted">REACT</span>
                </div>
            </div>
        </div>
    );
};

NewProjectCreated.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default NewProjectCreated;
