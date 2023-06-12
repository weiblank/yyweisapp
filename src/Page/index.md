<!--
 * @Author: weiyayun
 * @Date: 2023-02-21 19:37:42
 * @Interface:
 * @Description:
-->

# Page

```tsx
import React from 'react';
import { Page, Input } from 'yyweisapp';

const App: React.FC = () => {
  return (
    <Page>
      <Page.Header style={{ backgroundColor: '#f2f5fa' }}>Header</Page.Header>
      <Page.Content style={{ backgroundColor: 'pink' }}></Page.Content>
      <Page.Footer style={{ backgroundColor: 'green' }}>Footer</Page.Footer>
    </Page>
  );
};

export default App;
```
