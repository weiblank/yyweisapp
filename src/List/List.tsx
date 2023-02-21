import React from 'react';

import { List } from 'antd';

interface Prop {
  children?: React.ReactNode;
  [propsName: string]: any;
}

const YList: any = (props: Prop) => {
  const { children, ...others } = props;
  return <List {...others}>{children}</List>;
};

export default YList;
