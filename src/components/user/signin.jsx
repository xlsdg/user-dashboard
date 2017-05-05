import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'dva/router';
import {
  Form, Input, Button
} from 'antd';

import styles from './signin.less';

const FormItem = Form.Item;

class SigninForm extends React.Component {
  onSubmit = (evt) => {
    const that = this;
    // const {
    // } = that.state;
    const {
      form, onSignin
    } = that.props;
    evt.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSignin(values);
        form.resetFields();
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
              type: 'string', message: '请输入合法的用户名!'
            }, {
              required: true, message: '请输入用户名!', whitespace: true
            }]
          })(
            <Input placeholder="用户名或电子邮箱地址" />
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

    function renderSubmit() {
      return (
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">登录</Button>
          <Link className={styles.forgotWrap} to="/forgot">我忘记密码了</Link>
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
        {renderSubmit()}
      </Form>
    );
  }
}

SigninForm.propTypes = {
  onSignin: PropTypes.func.isRequired
};

SigninForm.defaultProps = {
};

export default Form.create()(SigninForm);
