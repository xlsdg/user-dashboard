import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Button
} from 'antd';

import styles from './signup.less';

const FormItem = Form.Item;

class SignupForm extends React.Component {
  onSubmit = (evt) => {
    const that = this;
    // const {
    // } = that.state;
    const {
      form, onSignup
    } = that.props;
    evt.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSignup(values);
      }
    });
  }
  render() {
    const that = this;
    // const {
    // } = that.state;
    const {
      form
    } = that.props;
    const {
      getFieldDecorator
    } = form;

    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6
      }
    };

    function renderUserName() {
      return (
        <FormItem
          {...formItemLayout}
          label="用户名"
          hasFeedback
        >
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '请输入用户名!', whitespace: true
            }]
          })(
            <Input placeholder="请使用半角的 a-z 或数字 0-9" />
          )}
        </FormItem>
      );
    }

    function renderPassword() {
      return (
        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码!'
            }]
          })(
            <Input type="password" />
          )}
        </FormItem>
      );
    }

    function renderEmail() {
      return (
        <FormItem
          {...formItemLayout}
          label="电子邮件"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入合法的邮箱地址!'
            }, {
              required: true, message: '请输入邮箱地址!', whitespace: true
            }]
          })(
            <Input placeholder="请使用真实电子邮箱注册" />
          )}
        </FormItem>
      );
    }

    function renderSubmit() {
      return (
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">注册</Button>
        </FormItem>
      );
    }

    return (
      <Form
        className={styles.formWrap}
        onSubmit={that.onSubmit}
      >
        {renderUserName()}
        {renderPassword()}
        {renderEmail()}
        {renderSubmit()}
      </Form>
    );
  }
}

SignupForm.propTypes = {
  onSignup: PropTypes.func.isRequired
};

SignupForm.defaultProps = {
};

export default Form.create()(SignupForm);
