import React from 'react';
// import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';

const InterviewQuestions = () => {
    return (
        <div className="card rounded card-spacing">
            <div className="floating-cntr">
                <IconButton aria-label="Copy">
                    <Icon>arrow_forward</Icon>
                </IconButton>
            </div>
            <h6 className="font-weight-bold text-extra-muted">INTERVIEW QUESTIONS</h6>
            <div className="row">
                <div className="col-6">
                    <h2 className="font-weight-bold mb-0 text-primary"><strong>42</strong></h2>
                    <small className="text-extra-muted"><small>STAKEHOLDER</small></small>
                </div>
                <div className="col-6">
                    <h2 className="font-weight-bold mb-0 text-primary"><strong>24</strong></h2>
                    <small className="text-extra-muted"><small>USER</small></small>
                </div>
            </div>
        </div>
    );
};

InterviewQuestions.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default InterviewQuestions;
