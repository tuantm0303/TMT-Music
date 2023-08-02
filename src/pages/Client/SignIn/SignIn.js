import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import logo from '../../../assets/images/logo.png';
import { validateMessages } from '../../../utils/validationForm';
import '../SignUp/SignUp.scss';

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="kcqwocdiuo">
      <div className="gcqitjxlnt">
        <div className="zvareokgyy">
          <img src={logo} alt="" />
        </div>
        <div className="aozkfpoiiu">
          <div className="nogrcezgqc">
            <Form className='lksdjglloo'
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              validateMessages={validateMessages}
            >
              <Form.Item
                name="username"
                rules={[{ required: true }]}
              >
                <Input placeholder='Username' className='zgdcwebglo' />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder='Password' className='crbgwgmdom' />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox className='iembffsomj'>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button className='dsggnhiuuo' htmlType="submit">
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
