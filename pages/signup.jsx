import React, { useCallback, useState } from "react";
import Head from "next/head";
import AppLayout from "../components/appLayout";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../reducers/user";
const ErrorMessage = styled.div`
  color: red;
  ${({ success }) => success && css`color : green;`}
`
const Signup = () => {
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordAlert, setPasswordAlert] = useState("");
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector(state => state.user);
  const onChangePasswordCheck = useCallback(({ target }) => {
    setPasswordCheck(target.value);
    setPasswordAlert(target.value !== password);
  }, [password]);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked); //첫클릭시 true
    setTermError(false);
  }, []);
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordAlert(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(`signup 이메일 : ${email}`);

    //액션생성함수 => 동적으로 해도되고 안해도됌 -나의 선택-
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        email,
        password,
        nickname,
      }
    })
  }, [password, passwordCheck, term, email, nickname]);
  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-email">이메일</label>
            <br />
            <Input
              type="email"
              name="user-email"
              id="user-email"
              value={email}
              required
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              id="user-nick"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              id="user-password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input
              name="user-password-check"
              id="user-password-check"
              type="password"
              required
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            {
              passwordAlert ?
                <ErrorMessage> 비밀번호가 일치 하지 않습니다</ErrorMessage>
                :
                <ErrorMessage success></ErrorMessage>
            }
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              제로초 말을 잘 들을 것을 동의합니다.
            </Checkbox>
            {termError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage>}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
}

export default Signup;
