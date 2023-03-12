/*
 * @Author: weiyayun
 * @Date: 2022-11-22 18:50:49
 * @Interface:
 * @Description:
 */
import React from 'react';
import { Layout } from 'antd';
import './index.less';
interface Prop {
  children?: React.ReactNode;
}

const Header = (props: Prop) => {
  const { children, ...others } = props;
  return (
    <Layout.Header className="qince-master-header" {...others}>
      {children}
    </Layout.Header>
  );
};

export default React.forwardRef(Header);
