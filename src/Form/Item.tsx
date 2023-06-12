/*
 * @Author: weiyayun
 * @Date: 2023-02-21 18:49:10
 * @Interface:
 * @Description:
 */
import React, { ReactNode } from 'react';
import { Form } from 'antd';
type ItemProps = {
  children: ReactNode;
  [props: string]: any;
};
const YFormItem: React.FC<ItemProps> = ({ children, ...props }) => {
  return <Form.Item {...props}>{children}</Form.Item>;
};
export default YFormItem;
