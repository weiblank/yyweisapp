# Input

```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React from 'react';
import { Input } from 'yyweisapp';

const App: React.FC = () => {
  return (
    <div>
      小
      <Input size="small" placeholder="small" />
      大
      <Input size="large" placeholder="large" />
      普通
      <Input />
      前后标签
      <Input addonBefore="http://" addonAfter=".com" defaultValue="前后标签" />
    </div>
  );
};

export default App;
```
