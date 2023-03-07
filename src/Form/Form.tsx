import React, { ReactNode } from 'react';
import { Form } from 'antd';
export type TableProps = {
  [props: string]: any;
};
const YForm: any = ({ ...props }: TableProps) => {
  return <Form {...props}>{props.children}</Form>;
};

export default YForm;
