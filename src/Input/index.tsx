import React from "react";
import {Input} from 'antd'
interface TableProps {
  [props: string]: any
}
const YInput = (props: TableProps) => {
  return <Input {...props} />
}
export default YInput