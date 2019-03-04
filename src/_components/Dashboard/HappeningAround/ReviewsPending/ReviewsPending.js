import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const ReviewsPending = () => {
    return (
        <div className="card rounded card-spacing card-warning">
            <h6 className="font-weight-bold text-extra-muted">INTERNAL REVIEWS PENDING</h6>
            <div className="project-cntr border-bottom border-light py-3">
                <div className="floating-cntr">
                    <IconButton aria-label="Copy">
                        <Icon>arrow_forward</Icon>
                    </IconButton>
                </div>
                <h6 className="font-weight-bold text-info"><strong>HME</strong></h6>
                <Grid container alignItems="center" className="avatar-grid">
                    <Avatar alt="Remy Sharp" src="users/carol.jpg" className="avatar" />
                    <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar" />
                    <span className="badge ml-3 mb-0 badge-pill badge-border text-muted">UX</span>
                    <span className="badge mb-0 badge-pill badge-border text-muted">REACT</span>
                </Grid>
            </div>

            <div className="project-cntr border-bottom border-light py-3">
                <div className="floating-cntr">
                    <IconButton aria-label="Copy">
                        <Icon>arrow_forward</Icon>
                    </IconButton>
                </div>
                <h6 className="font-weight-bold text-success"><strong>JTECH</strong></h6>
                <Grid container alignItems="center" className="avatar-grid">
                    <Avatar alt="Remy Sharp" src="users/carol.jpg" className="avatar" />
                    <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar" />
                    <span className="badge ml-3 mb-0 badge-pill badge-border text-muted">UX</span>
                    <span className="badge mb-0 badge-pill badge-border text-muted">REACT</span>
                </Grid>
            </div>

            <div className="project-cntr py-3">
                <div className="floating-cntr">
                    <IconButton aria-label="Copy">
                        <Icon>arrow_forward</Icon>
                    </IconButton>
                </div>
                <h6 className="font-weight-bold text-primary"><strong>FITCH</strong></h6>
                <Grid container alignItems="center" className="avatar-grid">
                    <Avatar alt="Remy Sharp" src="users/carol.jpg" className="avatar" />
                    <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar" />
                    <span className="badge ml-3 mb-0 badge-pill badge-border text-muted">UX</span>
                    <span className="badge mb-0 badge-pill badge-border text-muted">REACT</span>
                </Grid>
            </div>

        </div>
    );
};

ReviewsPending.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default ReviewsPending;
