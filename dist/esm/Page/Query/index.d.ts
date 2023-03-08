/**
 * 侧边栏筛选表单组件
 */
import React from 'react';
import './index.less';
interface Props {
  visible: boolean;
  children?: React.ReactNode;
  className?: string;
  width?: number;
  style?: React.CSSProperties;
  onToggle: (param?: boolean) => void;
  onSearch?: (param: Record<string, any>) => void;
  onReset?: (param: any) => void;
  [propName: string]: any;
}
declare const Query: React.FC<Props>;
export default Query;
