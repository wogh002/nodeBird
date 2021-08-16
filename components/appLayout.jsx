import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./userProfile";
import LoginForm from "./loginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";

const InputSearch = styled(Input.Search)`
  vertical-align: middle;
`
const AppLayout = ({ children }) => {
  // gutter : 컬럼에다 padding을 각각 추가하겠다 .
  // const style = useMemo(() => ({ verticalAlign: "middle" }));
  // const [loginDone, setLoginDone] = useState(false);
  //dispatch 될때마다 셀럭터 콜백함수 재실행.
  const { me } = useSelector((state) => state.user);
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <InputSearch />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://parkjaeho.tistory.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
    </>
  );
};
AppLayout.propTypes = {
  //타입스크립트 사용시 propTypes 필요없음
  //리액트의 node이다
  //화면에 그릴 수 있는 모든 것들이 node.
  children: PropTypes.node.isRequired,
};

export default AppLayout;
