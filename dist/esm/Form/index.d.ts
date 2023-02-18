import Item from './Item';
declare type FormItemType = {
  Item: typeof Item;
  [props: string]: any;
};
declare const Form: FormItemType;
export default Form;
