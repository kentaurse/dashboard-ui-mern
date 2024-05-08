import React, { useRef } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate()
  const email = useRef(null);
  const password = useRef(null);

  const onLogin = async () => {
    if(email.current.input.value && password.current.input.value){
      const res = await axios.post('/login', {email: email.current.input.value, password: password.current.input.value});
      if(res.status == 200) {
        alert('logined');
        localStorage.setItem('token', res.data.token);
        axios.defaults.headers.common["Authorization"] = res.data.token;
        navigate('/workspace');
      }else{
        alert('error');
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-[900px]">
      <div className="flex flex-col gap-5 w-[500px] border px-10 pt-10">
        <div className="flex justify-center">
          <img src="/logo.png" />
        </div>
        <Input ref={email}/>
        <Input.Password ref={password} />
        <Checkbox>Remember me</Checkbox>
        <div className="flex justify-center gap-5 mb-10">
          <Button type="link" className="border-none">パスワードをお忘れですか？</Button>
          <Button type="primary" onClick={onLogin}>ログイン</Button>
          <Button type="primary" danger onClick={() => navigate('/register')}>登録</Button>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;