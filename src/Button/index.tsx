import React, { ReactNode } from 'react';
import { Button } from 'antd';

const YButton = ({children, ...others}: {children: ReactNode, others: any}): ReactNode => {
  return <Button {...others}>{children}</Button>
}
export default YButton