import InternalList from './List';
import Item from './Item';

type FormItemType = {
  Item: typeof Item;
  [props: string]: any;
};

const List = InternalList as unknown as FormItemType;

List.Item = Item;
export default List;
