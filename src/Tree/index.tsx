import React from 'react';
import { Tree } from 'antd';
interface TableProps {
  [props: string]: any;
}
const YTree: React.FC<TableProps> = (props) => {
  return <Tree {...props} />;
};
export default YTree;
