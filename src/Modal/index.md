# Modal

```tsx
import React, { useState } from 'react';
import { Button, Divider, Modal } from 'yyweisapp';

export default () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>打开弹窗</Button>
      <Modal open={visible} title="modal" onCancel={() => setVisible(!visible)}>
        我是普通弹框
      </Modal>
      <Divider>可拖拽弹框</Divider>
      <Button onClick={() => setVisible2(!visible2)}>打开弹窗</Button>
      <Modal draggable={true} open={visible2} title="modal" onCancel={() => setVisible2(!visible2)}>
        我是可拖拽弹框
      </Modal>
    </>
  );
};
```
