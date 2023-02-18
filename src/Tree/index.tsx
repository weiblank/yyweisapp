import React from "react";
import {Tree} from 'antd'
interface TableProps {
  [props: string]: any
}
const YTree = (props: TableProps) => {
  return <Tree {...props} />
}
export default YTree