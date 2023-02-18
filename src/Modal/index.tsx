import React from "react";
import {Modal} from 'antd'
interface TableProps {
  [props: string]: any
}
const YTModal = (props: TableProps) => {
  return <Modal {...props}>
    {props.children}
  </Modal>
}
export default YTModal