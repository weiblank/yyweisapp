import React from "react";
import {Table} from 'antd'
interface TableProps {
  [props: string]: any
}
const YTable = (props: TableProps) => {
  return <Table {...props} />
}
export default YTable