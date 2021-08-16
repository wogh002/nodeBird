import React from "react";
import AppLayout from "../components/appLayout";
import Head from "next/head";
import NicknameEditForm from "../components/nicknameEditForm";
import FollowingList from "../components/followingList";
import FollowerList from "../components/followerList";
import { useSelector } from "react-redux";
// 다른 페이지에 있는 Head는 _app의 Head를 덮어씌웁니다.
const Profile = () => {
  const { me } = useSelector(state => state.user);
  // const followingList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  // const followerList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowingList header="팔로잉" data={me.Followings} />
        <FollowerList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  )
}

export default Profile;
