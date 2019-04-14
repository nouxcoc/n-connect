import React from 'react';
// import PropTypes from 'prop-types';
import { AllProjects, ActiveProjects, NewProjects, TeamMembers, InterviewQuestions, RecentProjects, NewProjectCreated, HeuristicEvaluation} from '.';
import { NotesComponent } from '../Notes/NotesComponent';

const HappeningAround = ({ todo, onEdit, onDelete, onUpdate }) => {
    return (
        <div className="">
            <div className="row d-flex">
                <div className="col-12 mb-2">
                    <h5 className="text-muted font-weight-bold">What's happening around</h5>
                </div>
                <div className="col-lg-4 d-flex">
                    <AllProjects />
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                    <ActiveProjects />
                </div>
                <div className="col-lg-4 col-md-6 d-flex">
                    <NewProjects />
                </div>
            </div>

            <div className="row mt-4 d-flex">
                <div className="col-lg-6 d-flex">
                    <TeamMembers />
                </div>
                <div className="col-lg-6 d-flex">
                    <InterviewQuestions />
                </div>
            </div>

            <div className="row mt-4 d-flex">
                <div className="col-md-6 d-flex">
                    <NewProjectCreated />
                </div>

                <div className="col-md-6 d-flex">
                    <HeuristicEvaluation />
                </div>
            </div>

            <div className="row mt-4 d-flex">
                <div className="col-lg-6 d-flex">
                    <RecentProjects />
                </div>
                <div className="col-lg-6 d-flex">
                    {/* <ReviewsPending /> */}
                    <NotesComponent/>
                </div>
            </div>
        </div>
    );
};

HappeningAround.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default HappeningAround;
