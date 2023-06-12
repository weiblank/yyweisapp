import React, { ReactNode } from 'react';
import { Button } from 'antd';

type BtnType = {
  children?: ReactNode;
  [othersProps: string]: any;
};
const YButton: React.FC<BtnType> = ({ children, ...others }) => {
  return <Button {...others}>{children}</Button>;
};
export default YButton;
