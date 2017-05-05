import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Button
} from 'antd';

import styles from './signup.less';

const FormItem = Form.Item;

class ForgotForm extends React.Component {
  onSubmit = (evt) => {
    const that = this;
    // const {
    // } = that.state;
    const {
      form, onForgot
    } = that.props;
    evt.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onForgot(values);
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
            <Input />
          )}
        </FormItem>
      );
    }

    function renderSubmit() {
      return (
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">继续</Button>
        </FormItem>
      );
    }

    return (
      <Form
        className={styles.formWrap}
        onSubmit={that.onSubmit}
      >
        {renderEmail()}
        {renderSubmit()}
      </Form>
    );
  }
}

ForgotForm.propTypes = {
  onForgot: PropTypes.func.isRequired
};

ForgotForm.defaultProps = {
};

export default Form.create()(ForgotForm);
