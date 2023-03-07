import React from 'react';
import { Divider } from 'antd';

interface DividerProps {
  [props: string]: any;
}
export default (props: DividerProps) => {
  return <Divider>{props.children}</Divider>;
};
