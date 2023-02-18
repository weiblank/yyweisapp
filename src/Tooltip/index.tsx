import React from "react";
import {Tooltip} from 'antd'
interface TableProps {
  [props: string]: any
}
const YTooltip = (props: TableProps) => {
  return <Tooltip {...props} />
}
export default YTooltip