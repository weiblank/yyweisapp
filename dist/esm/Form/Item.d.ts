/// <reference types="react" />
export interface ItemProps {
  children: any;
  [props: string]: any;
}
declare const YFormItem: ({ children, ...props }: ItemProps) => JSX.Element;
export default YFormItem;
