import React, { ReactNode } from 'react';
import { Form } from 'antd';
export interface ItemProps {
  children: any;
  [props: string]: any;
}
const YFormItem: any = ({ children, ...props }: ItemProps) => {
  return <Form.Item {...props}>{children}</Form.Item>;
};
export default YFormItem;
