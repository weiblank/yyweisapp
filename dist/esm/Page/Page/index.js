var _excluded = ['children'];
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
import React from 'react';
import { Layout } from 'antd';
import './index.less';
var Page = function Page(props) {
  var children = props.children,
    others = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/ React.createElement(
    Layout,
    _extends(
      {
        className: 'qince-master-page',
      },
      others,
    ),
    children,
  );
};
export default Page;

// import React from 'react';
// import styled from 'styled-components';

// import GridContent from './GridContent';

// const PagePanel = styled.div`
//   padding-bottom: 20px;
//   height: 100%;
//   overflow: hidden;
// `;

// const PageContent = styled.div`
//   margin: 24px 0px 0 4px;
// `;

// interface Prop {
//   wrapperClassName?: string;
//   children?: React.ReactNode;
//   top?: React.ReactNode;
// }

// const Page: React.FC = (props: Prop) => {
//   const { children, wrapperClassName, top } = props;
//   return (
//     <PagePanel className={wrapperClassName}>
//       {top}
//       {children ? (
//         <PageContent>
//           <GridContent>{children}</GridContent>
//         </PageContent>
//       ) : null}
//     </PagePanel>
//   );
// };

// export default Page;
