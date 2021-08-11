import React from "react";
import { useSelector } from "react-redux";
import PostForm from '../components/postForm';
import PostCard from "../components/postCard";
import AppLayout from "../components/appLayout";
// 여기는 index.js
const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(post => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};

export default Home;
