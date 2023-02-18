# Card

```tsx
import React from 'react';
import Card from './index';

const App: React.FC = () => (
  <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

export default App;
```
