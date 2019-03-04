import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import { ArticleCard } from '.';

const UsefulArticles = ({ todo, onEdit, onDelete, onUpdate }) => {
    return (
        <div className="">
            <div className="row mt-5">
                <div className="col-12 mb-2">
                    <h5 className="text-muted font-weight-bold">Useful Articles</h5>
                </div>
            </div>
            <div className="row d-flex">
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    );
};

UsefulArticles.propTypes = {
    // todo: PropTypes.object.isRequired,
};

export default UsefulArticles;
