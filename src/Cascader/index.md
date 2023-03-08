# Cascader

```tsx
import React from 'react';
import { Cascader } from 'yyweisapp';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'anhui',
    label: '安徽',
    children: [
      {
        value: 'hefei',
        label: '合肥',
        children: [
          {
            value: 'tianehu',
            label: '天鹅湖',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门',
          },
        ],
      },
    ],
  },
];

const onChange = (value: string[]) => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader options={options} onChange={onChange} placeholder="Please select" />
);

export default App;
```
