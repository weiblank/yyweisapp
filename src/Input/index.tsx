/*
 * @Author: weiyayun
 * @Date: 2023-02-21 18:49:10
 * @Interface:
 * @Description:
 */
import React from 'react';
import { Input } from 'antd';
type TableProps = {
  [props: string]: any;
};
const YInput: React.FC<TableProps> = (props) => {
  return <Input {...props} />;
};
export default YInput;
