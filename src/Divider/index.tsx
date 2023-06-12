/*
 * @Author: weiyayun
 * @Date: 2023-03-12 14:39:22
 * @Interface:
 * @Description:
 */
import React from 'react';
import { Divider } from 'antd';

type DividerType = {
  [props: string]: any;
};
const YDivider: React.FC<DividerType> = (props) => {
  return <Divider>{props.children}</Divider>;
};
export default YDivider;
