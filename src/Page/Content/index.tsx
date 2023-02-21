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

const Content = (props: Prop) => {
  const { children, ...others } = props;
  return (
    <Layout.Content className="qince-master-content" {...others}>
      {children}
    </Layout.Content>
  );
};

export default React.forwardRef(Content);
