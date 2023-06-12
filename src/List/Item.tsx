/*
 * @Author: weiyayun
 * @Date: 2022-11-22 18:50:49
 * @Interface:
 * @Description:
 */
import React from 'react';
import { List } from 'antd';

type Prop = {
  children?: React.ReactNode;
};

const ListItem: React.FC<Prop> = (props) => {
  const { children, ...others } = props;
  return <List.Item {...others}>{children}</List.Item>;
};

export default ListItem;
