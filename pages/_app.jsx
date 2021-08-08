//페이지들의 공통적으로 사용되는 부분은 _app 에서 작성해서 적용시키자
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
//웹팩이란 여러개의 파일을 하나의 js파일로 합쳐준다.
//next의 웹팩이 css를 보는 순간
// css를 <style>태그로 바꿔서 html 에다가 넣어준다
import "antd/dist/antd.css";

//index의 부모는 app
// index.js의 return 부분이 _App 의 Component로 간다
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird@@</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  //점검을 무조건 해주자 점검을하면 서비스의 안전성 ↑
  //<Component />처럼 JSX로 쓸 수 있는 것들을 elementType이라고 합니다.
  Component: PropTypes.elementType.isRequired,
};
export default NodeBird;
