import React from "react";
import {Card} from 'antd'
interface TableProps {
  [props: string]: any
}
const YCard = (props: TableProps) => {
  return <Card {...props} />
}
export default YCard