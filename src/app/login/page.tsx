"use client";
import React from "react";
import type { FormProps } from "antd";
import { useRouter } from "next/navigation";
import { Button, Checkbox, Form, Input } from "antd";
import googleLogo from "../../../public/image/7123025_logo_google_g_icon.ico";
import githubLogo from "../../../public/image/github-mark.png";
import SignInButton from "../component/authButton";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const router = useRouter();
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  if (values && values.username === "Admin" && values.password === "123") {
    router.push("/");
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC = () => (
  <div className="flex items-center justify-center ">
    <Form
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 20 }}
      style={{
        maxWidth: 800,
        border: "1px solid",
        marginTop: 50,
        padding: "10px 5px",
        borderRadius: "10px",
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item<FieldType> wrapperCol={{ offset: 8, span: 16 }}>
        <div className="flex gap-2">
          <SignInButton provider="google" icon={googleLogo} />
          <SignInButton provider="github" icon={githubLogo} />
        </div>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 0, span: 28 }}>
        <Button className="w-full text-center" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default Login;
