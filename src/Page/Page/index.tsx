import React from 'react';

import { Layout } from 'antd';

import './index.less';
interface Prop {
  children?: React.ReactNode;
  [propsName: string]: any;
}

const Page: any = (props: Prop) => {
  const { children, ...others } = props;
  return (
    <Layout className="qince-master-page" {...others}>
      {children}
    </Layout>
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
