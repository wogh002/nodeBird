import React from "react";
import AppLayout from "../components/appLayout";
import Head from "next/head";
import NicknameEditForm from "../components/nicknameEditForm";
import FollowingList from "../components/followingList";
import FollowerList from "../components/followerList";
// 다른 페이지에 있는 Head는 _app의 Head를 덮어씌웁니다.
const Profile = () => {
  const followingList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  const followerList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowingList header="팔로잉 목록" data={followingList} />
        <FollowerList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  )
}

export default Profile;
