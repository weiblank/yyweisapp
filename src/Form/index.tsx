import InternalForm from './Form'
import Item from './Item'

type FormItemType = {
  Item: typeof Item;
  [props: string]: any;
}

const Form = InternalForm as unknown as FormItemType

Form.Item = Item
export default Form