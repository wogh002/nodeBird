import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostForm from '../components/postForm';
import PostCard from "../components/postCard";
import AppLayout from "../components/appLayout";
import { LOAD_POST_REQUEST } from "../reducers/post";
import wrapper from '../store/configureStore';
// 여기는 index.js
const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map(post => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};
//next 9버전 사용해야됩니다.
//getServerSideProps가 서버쪽에서 먼저 실행을한다.
//해당 컴포넌트보다 먼저 실행되게 해준다.
export const getServerSideProps = wrapper.getServerSideProps(context => {
  //context 안에 store 가 들어있다.
  context.store.dispatch(({
    type: LOAD_POST_REQUEST,
  }));

})
export default Home;
