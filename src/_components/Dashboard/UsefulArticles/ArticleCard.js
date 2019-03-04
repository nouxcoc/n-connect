import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';

const ArticleCard = ({ todo, onEdit, onDelete, onUpdate }) => {
    return (
        <div className="col-lg-6 d-flex">
            <div className="card rounded card-spacing">
                <h5 className="font-weight-bold">Designing Emotional Interfaces Of The Future</h5>
                <p className="text-extra-muted">When it comes to change, we tend to naturally resist it. The only real boundary we have are our brains telling us that things are best to be left as they’ve always been...</p>
                <Tooltip title="Anil D" placement="top">
                    <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar" />
                </Tooltip>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default ArticleCard;
