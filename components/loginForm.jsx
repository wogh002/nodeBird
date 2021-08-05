import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 컴포넌트의 props로 넘겨주는 함수는 useCallback() 꼭 사용합시다!
  const onChangeId = useCallback(({ target }) => {
    setId(target.value);
    target.focus();
  }, []);
  const onChangePassword = useCallback(({ target }) => {
    setPassword(target.value);
    target.focus();
  });
  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          id="user-id"
          value={id}
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">패스워드</label>
        <br />
        <Input
          name="user-password"
          id="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;