/*
 * @Author: weiyayun
 * @Date: 2023-02-21 18:49:10
 * @Interface:
 * @Description:
 */
import React from 'react';
import { Form } from 'antd';
type TableProps = {
  Item?: any;
  [props: string]: any;
};
const YForm: React.FC<TableProps> = ({ ...props }) => {
  return <Form {...props}>{props.children}</Form>;
};

export default YForm;
