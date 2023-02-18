import React from "react";
import {List} from 'antd'
interface TableProps {
  [props: string]: any
}
const YList = (props: TableProps) => {
  return <List {...props} />
}
export default YList