import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const QuestionaireUpdates = ({ todo, onEdit, onDelete, onUpdate }) => {
  return (
    <div className="mt-4 card bg-light-dark rounded card-spacing">
      <h6 className="font-weight-bold text-white opac-5">QUESTIONAIRE</h6>
      <div className="project-cntr border-bottom border-dark py-3">
        <div className="floating-cntr">
          <IconButton aria-label="View" color="primary">
            <Icon className="text-white">arrow_forward</Icon>
          </IconButton>
        </div>
        <h6 className="font-weight-bold text-secondary"><strong>HME</strong></h6>
        <p className="mb-0 text-white pr-5">HME answered STAKEHOLDER Interview Questions</p>
      </div>

      <div className="project-cntr pt-3">
        <div className="floating-cntr">
          <IconButton aria-label="View" color="primary">
            <Icon className="text-white">arrow_forward</Icon>
          </IconButton>
        </div>
        <h6 className="font-weight-bold text-secondary"><strong>FITCH</strong></h6>
        <p className="mb-0 text-white pr-5">Fitch Users answered USER Interview Questions</p>
      </div>
    </div>
  );
};

QuestionaireUpdates.propTypes = {
  // todo: PropTypes.object.isRequired,
};

export default QuestionaireUpdates;
