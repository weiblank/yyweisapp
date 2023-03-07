# Form

```tsx
import React, { useForm } from 'react';
import { Button, Form, Input } from 'yyweisapp';

const App: React.FC = () => (
  <Form
    onFinish={(values: any) => {
      console.log(values);
    }}
  >
    <Form.Item name="name" label="姓名">
      <Input />
    </Form.Item>
    <Form.Item name="age" label="年龄">
      <Input />
    </Form.Item>
    <Form.Item name="sex" label="性别">
      <Input />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
);

export default App;
```
