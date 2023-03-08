import React from 'react';
import { Cascader } from 'antd';

interface CascaderProps {
  [props: string]: any;
}
export default (props: CascaderProps) => {
  return <Cascader {...props} />;
};
