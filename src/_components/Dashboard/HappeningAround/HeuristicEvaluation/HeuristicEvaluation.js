import React from 'react';
// import PropTypes from 'prop-types';

const HeuristicEvaluation = () => {
    return (
        <div className="card rounded card-spacing card-info">
            <h6 className="font-weight-bold text-extra-muted">HEURISTIC EVALUATION</h6>
            <div className="progress-cntr text-muted my-2">
                <h4 className="font-weight-bold mb-0 text-success"><strong>30</strong></h4>
                <div className="progress-bg-fill">
                    <div className="progress-fill bg-success" style={{ width: '30%' }}>
                    </div>
                </div>
                <small className="text-extra-muted"><small>EVALUATED PROJECTS</small></small>
            </div>
            <div className="progress-cntr text-muted my-2">
                <h4 className="font-weight-bold mb-0 text-warning"><strong>40</strong></h4>
                <div className="progress-bg-fill">
                    <div className="progress-fill bg-warning" style={{ width: '40%' }}>
                    </div>
                </div>
                <small className="text-extra-muted"><small>PENDING PROJECTS</small></small>
            </div>
            <div className="progress-cntr text-muted my-2">
                <h4 className="font-weight-bold mb-0 text-info"><strong>30</strong></h4>
                <div className="progress-bg-fill">
                    <div className="progress-fill bg-info" style={{ width: '30%' }}>
                    </div>
                </div>
                <small className="text-extra-muted"><small>NOT APPLICABLE</small></small>
            </div>
        </div>
    );
};

HeuristicEvaluation.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default HeuristicEvaluation;
