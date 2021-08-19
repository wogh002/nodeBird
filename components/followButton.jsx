import React from 'react';
import { Button } from "antd";
import PropTypes from 'prop-types';
const FollowButton = ({ post }) => {
    return (
        <Button onClick={ }>Follow</Button>
    );

}
FollowButton.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
        User: PropTypes.object,
        Image: PropTypes.arrayOf(PropTypes.object),
        Comments: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}
export default FollowButton;