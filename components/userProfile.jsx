import React, { useCallback } from "react";
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";
const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => dispatch(logoutAction()), []);
    //리액트에서 배열안에 jsx 사용시 key 값 필수
    return (
        <Card actions={[
            <div key="twit">짹짹 <br />0</div>,
            <div key="followings">팔로잉<br />0</div>,
            <div key="followers"> 팔로워 <br />0</div>,
        ]}>
            <Card.Meta
                avatar={
                    <Avatar>zc</Avatar>
                }
                title="Zero cho"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
