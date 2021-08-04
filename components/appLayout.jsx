import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Link href="/">
        <a>노드버드</a>
      </Link>
      <Link href="/profile">
        <a>프로필</a>
      </Link>
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
      {children}
    </div>
  );
};
AppLayout.propTypes = {
  //타입스크립트 사용시 propTypes 필요없음
  //리액트의 node이다
  //화면에 그릴 수 있는 모든 것들이 node.
  children: PropTypes.node.isRequired,
};

export default AppLayout;
