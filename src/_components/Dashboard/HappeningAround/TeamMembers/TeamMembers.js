import React from 'react';
// import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const TeamMembers = () => {
    return (
        <div className="card rounded card-spacing">
            <div className="floating-cntr">
                <IconButton aria-label="Copy">
                    <Icon>arrow_forward</Icon>
                </IconButton>
            </div>
            <h6 className="font-weight-bold text-extra-muted">TEAM MEMBERS</h6>
            <Grid container alignItems="center" className="avatar-grid">
                <Tooltip title="Remy Sharp" placement="top">
                    <Avatar alt="Remy Sharp" src="users/carol.jpg" className="avatar" />
                </Tooltip>
                <Tooltip title="Anil D" placement="top">
                    <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar" />
                </Tooltip>
                <Avatar alt="Remy Sharp" src="users/mdnawaz.jpg" className="avatar" />
                <Avatar alt="Remy Sharp" src="users/rick.jpg" className="avatar" />
                <Avatar alt="Remy Sharp" src="users/daryl.jpg" className="avatar" />
                <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar" />
                <Avatar className="avatar">+8</Avatar>
            </Grid>
            <small className="text-extra-muted mt-1"><small>TOTAL 16 MEMBERS</small></small>
        </div>
    );
};

TeamMembers.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default TeamMembers;
