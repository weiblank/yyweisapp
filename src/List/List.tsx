/*
 * @Author: weiyayun
 * @Date: 2023-02-21 18:49:10
 * @Interface:
 * @Description:
 */
import React from 'react';

import { List } from 'antd';

type ListType = {
  children?: React.ReactNode;
  [propsName: string]: any;
};

const YList: React.FC<ListType> = (props) => {
  const { children, ...others } = props;
  return <List {...others}>{children}</List>;
};

export default YList;
