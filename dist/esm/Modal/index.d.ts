import React from 'react';
interface modalProps {
  children: React.ReactNode;
  draggable?: Boolean;
  [props: string]: any;
}
declare const _default: ({ children, draggable, ...others }: modalProps) => JSX.Element;
export default _default;
