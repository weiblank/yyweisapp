import React from "react";
import {Tabs} from 'antd'
interface TableProps {
  [props: string]: any
}
const YTabs = (props: TableProps) => {
  return <Tabs {...props} />
}
export default YTabs