function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
var _excluded = [
  'className',
  'visible',
  'width',
  'onSearch',
  'onReset',
  'onToggle',
  'style',
  'children',
];
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
/**
 * 侧边栏筛选表单组件
 */
import React, { useRef, useImperativeHandle } from 'react';
import { Layout, Form, Button, Row, Col, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './index.less';
var Query = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var className = props.className,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    _props$width = props.width,
    width = _props$width === void 0 ? 220 : _props$width,
    _props$onSearch = props.onSearch,
    onSearch = _props$onSearch === void 0 ? function () {} : _props$onSearch,
    _props$onReset = props.onReset,
    onReset = _props$onReset === void 0 ? function () {} : _props$onReset,
    _props$onToggle = props.onToggle,
    onToggle = _props$onToggle === void 0 ? function () {} : _props$onToggle,
    style = props.style,
    children = props.children,
    others = _objectWithoutProperties(props, _excluded);
  var formRef = useRef();
  useImperativeHandle(ref, function () {
    return {
      // 暴露给父组件
      show: function show() {
        // setVisible(true);
      },
      hide: function hide() {
        // setVisible(false);
      },
      toggle: function toggle() {
        // setVisible(!visible);
      },
      form: formRef.current,
    };
  });

  // 打开/关闭高级查询
  var handleToggle = function handleToggle(val) {
    if (onToggle) onToggle(val);
  };

  // 点击查询按钮
  var handleSearch = function handleSearch() {
    onSearch(formRef.current.getFieldsValue());
  };

  // 点击清空按钮
  var handleReset = function handleReset() {
    formRef.current.resetFields();
    if (onReset) onReset(formRef);
  };
  return /*#__PURE__*/ React.createElement(
    Layout.Sider,
    _extends(
      {
        width: visible ? width : 0,
      },
      others,
      {
        style: _objectSpread(
          {
            transition: 'none',
          },
          style,
        ),
      },
    ),
    /*#__PURE__*/ React.createElement(
      Layout,
      {
        className: 'wq-page-query',
        style: {
          height: '100%',
        },
      },
      /*#__PURE__*/ React.createElement(
        Layout.Header,
        {
          className: 'wq-page-query-header',
        },
        /*#__PURE__*/ React.createElement(
          Row,
          null,
          /*#__PURE__*/ React.createElement(
            Col,
            {
              flex: 'auto',
            },
            '\u67E5\u8BE2\u6761\u4EF6',
          ),
          /*#__PURE__*/ React.createElement(
            Col,
            null,
            /*#__PURE__*/ React.createElement(
              Space,
              null,
              /*#__PURE__*/ React.createElement(
                'span',
                {
                  onClick: function onClick() {
                    return handleToggle(false);
                  },
                  style: {
                    cursor: 'pointer',
                  },
                },
                /*#__PURE__*/ React.createElement(ArrowRightOutlined, null),
              ),
            ),
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        Layout.Content,
        {
          className: 'wq-page-query-content',
        },
        /*#__PURE__*/ React.createElement(
          Form,
          {
            ref: formRef,
            layout: 'vertical',
            autoComplete: 'off',
          },
          children,
        ),
      ),
      /*#__PURE__*/ React.createElement(
        Layout.Footer,
        {
          className: 'wq-page-query-footer',
        },
        /*#__PURE__*/ React.createElement(
          Row,
          null,
          /*#__PURE__*/ React.createElement(
            Col,
            {
              span: 12,
              style: {
                paddingRight: 5,
              },
            },
            /*#__PURE__*/ React.createElement(
              Button,
              {
                type: 'primary',
                block: true,
                onClick: handleSearch,
              },
              '\u786E\u5B9A',
            ),
          ),
          /*#__PURE__*/ React.createElement(
            Col,
            {
              span: 12,
              style: {
                paddingLeft: 5,
              },
            },
            /*#__PURE__*/ React.createElement(
              Button,
              {
                block: true,
                onClick: handleReset,
              },
              '\u91CD\u7F6E',
            ),
          ),
        ),
      ),
    ),
  );
});
export default Query;
