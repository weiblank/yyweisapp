## Button

Demo:

```tsx
/**
 * desc: 按钮示例
 */
import React from 'react';

import Button from './index';
export default () => {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <Button type="text">我是按钮</Button>
      <Button type="primary">我是按钮</Button>
      <Button type="dashed">我是按钮</Button>
      <Button type="link">我是按钮</Button>
      <Button type="primary" disabled>
        我是按钮
      </Button>
    </div>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
