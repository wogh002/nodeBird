import React, { useCallback } from "react";
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";
const UserProfile = () => {
    const dispatch = useDispatch();
    //액션이 스토어로 dispatch 될 때 마다 selector 함수는 재실행 된다  
    const { me, logOutLoading } = useSelector((state) => state.user);

    const onLogOut = useCallback(() => dispatch(logoutRequestAction()), []);
    //리액트에서 배열안에 jsx 사용시 key 값 필수
    return (
        <Card actions={[
            <div key="twit">짹짹 <br />{me.Posts.length}</div>,
            <div key="followings">팔로잉<br />{me.Followings.length}</div>,
            <div key="followers"> 팔로워 <br />{me.Followers.length}</div>,
        ]}>
            <Card.Meta
                avatar={
                    <Avatar>{me.nickname[0]}</Avatar>
                }
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
