/// <reference types="react" />
export interface ItemProps {
  children: any;
  [props: string]: any;
}
declare const YListItem: ({ children, ...props }: ItemProps) => JSX.Element;
export default YListItem;
