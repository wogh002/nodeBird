import React, { useCallback } from 'react';
import { Button } from "antd";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';
const FollowButton = ({ post }) => {
    const { me, followLoading, unFollowLoading } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const isFollowing = me && me.Followings.find(v => v.id === post.User.id);
    //true 면 이미 팔로잉중
    //false 면 아무개
    const onClick = useCallback(() => {
        if (isFollowing) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            })
        }
        else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            })
        }
    }, [isFollowing]);
    return (
        <Button loading={followLoading || unFollowLoading} onClick={onClick}>
            {isFollowing ? "unFollow" : "Follow"}
        </Button>
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