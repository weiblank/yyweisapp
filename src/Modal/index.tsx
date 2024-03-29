/*
 * @Author: weiyayun
 * @Date: 2023-02-21 18:49:10
 * @Interface:
 * @Description:
 */
import React, { useState, useRef } from 'react';
import { Modal } from 'antd';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

type modalProps = {
  children: React.ReactNode;
  draggable?: Boolean;
  [props: string]: any;
};
const YModal: React.FC<modalProps> = ({ children, draggable, ...others }) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <Modal
      {...others}
      modalRender={(modal) =>
        draggable ? (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        ) : (
          modal
        )
      }
    >
      {children}
    </Modal>
  );
};
export default YModal;
