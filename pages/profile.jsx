import React, { useEffect } from "react";
import AppLayout from "../components/appLayout";
import Head from "next/head";
import NicknameEditForm from "../components/nicknameEditForm";
import FollowingList from "../components/followingList";
import FollowerList from "../components/followerList";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'
// 다른 페이지에 있는 Head는 _app의 Head를 덮어씌웁니다.

const Profile = () => {
  const router = useRouter();
  const { me } = useSelector(state => state.user);
  useEffect(() => { //로그아웃 했다면.
    if (!(me && me.id)) {
      router.push('/');
    }
  }, [me && me.id]);

  if (!me) { //로그인 되지 않았다면 안보이게
    return null;
  }
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
