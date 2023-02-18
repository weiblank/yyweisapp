# Form

```tsx
import React from 'react';
import Input from '../Input/index';
import Form from './index';

const App: React.FC = () => (
  <Form>
    <Form.Item name="name" label="姓名">
      <Input />
    </Form.Item>
  </Form>
);

export default App;
```
