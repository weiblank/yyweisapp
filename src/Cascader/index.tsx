/*
 * @Author: weiyayun
 * @Date: 2023-03-12 14:39:22
 * @Interface:
 * @Description:
 */
import React from 'react';
import { Cascader } from 'antd';

type CascaderType = {
  [props: string]: any;
};
const YCascader: React.FC<CascaderType> = (props) => {
  return <Cascader {...props} />;
};

export default YCascader;
