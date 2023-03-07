import React from 'react';
import { DatePicker } from 'antd';

interface DatePickerProps {
  [props: string]: any;
}
export default (props: DatePickerProps) => {
  return <DatePicker {...props} />;
};
