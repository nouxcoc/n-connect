import React from 'react';
import PropTypes from 'prop-types';
import { UserProfile, ToDoInfo, NewProject, CurrentProject, QuestionaireUpdates } from '.';

const UserInfo = ({ todo, onEdit, onDelete, onUpdate }) => {
  return (
    <div className="scollable dark-scrollbar card-spacing">
      <div className="row">
        <div className="col-12 mb-2">
          <h5 className="text-white opac-5">Good <span className="font-weight-bold">Morning</span></h5>
        </div>
        <div className="col-12">
        
          <UserProfile />
          <ToDoInfo />
          <NewProject />
          <CurrentProject />
          <QuestionaireUpdates />

        </div>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  // todo: PropTypes.object.isRequired,
};

export default UserInfo;
