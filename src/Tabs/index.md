# Tabs

```tsx
import React from 'react';
import { Tabs } from 'yyweisapp';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
const onChange = (key: string) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
      有图标的标签
      <Tabs
        defaultActiveKey="1"
        items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
          const id = String(i + 1);

          return {
            label: (
              <span>
                <Icon />
                Tab {id}
              </span>
            ),
            key: id,
            children: `Tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default App;
```
