import React from 'react';
import { DatePicker } from 'antd';

type DatePickerType = {
  [props: string]: any;
};
const YDatePicker: React.FC<DatePickerType> = (props) => {
  return <DatePicker {...props} />;
};

export default YDatePicker;
