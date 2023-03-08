function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError('Cannot destructure ' + obj);
}
import React from 'react';
import { Form } from 'antd';
var YForm = function YForm(_ref) {
  var props = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/ React.createElement(Form, props, props.children);
};
export default YForm;
