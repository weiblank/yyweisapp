/*
 * @Author: weiyayun
 * @Date: 2022-11-22 18:50:49
 * @Interface:
 * @Description:
 */
import React from 'react';
import { Layout } from 'antd';

interface Prop {
  children?: React.ReactNode;
}

const Footer = (props: Prop) => {
  const { children, ...others } = props;
  return (
    <Layout.Footer className="qince-master-footer" {...others}>
      {children}
    </Layout.Footer>
  );
};

export default React.forwardRef(Footer);
