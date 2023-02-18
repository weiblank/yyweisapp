import React, { ReactNode } from 'react';
import { List } from 'antd';
export interface ItemProps {
  children: any;
  [props: string]: any;
}
const YListItem = ({ children, ...props }: ItemProps) => {
  return <List.Item {...props}>{children}</List.Item>;
};
export default YListItem;
