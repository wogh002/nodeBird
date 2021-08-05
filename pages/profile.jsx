import React from "react";
import AppLayout from "../components/appLayout";
import Head from "next/head";
// 다른 페이지에 있는 Head가 _app의 Head를 덮어씌웁니다.
const Profile = () => (
  <>
    <Head>
      <title>내 프로필 | NodeBird</title>
    </Head>
    <AppLayout>내 프로필</AppLayout>
  </>
);

export default Profile;
