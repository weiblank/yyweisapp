/**
 * 侧边栏筛选表单组件
 */
import React, { useRef, useImperativeHandle } from 'react';
import { Layout, Form, Button, Row, Col, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import './index.less';

interface Props {
  visible: boolean;
  children?: React.ReactNode;
  className?: string;
  width?: number;
  style?: React.CSSProperties;
  onToggle: (param?: boolean) => void;
  onSearch?: (param: Record<string, any>) => void;
  onReset?: (param: any) => void;
  [propName: string]: any;
}

const Query: React.FC<Props> = React.forwardRef((props: Props, ref) => {
  const {
    className,
    visible = false,
    width = 220,
    onSearch = () => {},
    onReset = () => {},
    onToggle = () => {},
    style,
    children,
    ...others
  } = props;

  const formRef: any = useRef();

  useImperativeHandle(ref, () => ({
    // 暴露给父组件
    show: () => {
      // setVisible(true);
    },
    hide: () => {
      // setVisible(false);
    },
    toggle: () => {
      // setVisible(!visible);
    },
    form: formRef.current,
  }));

  // 打开/关闭高级查询
  const handleToggle = (val: boolean) => {
    if (onToggle) onToggle(val);
  };

  // 点击查询按钮
  const handleSearch = () => {
    onSearch(formRef.current.getFieldsValue());
  };

  // 点击清空按钮
  const handleReset = () => {
    formRef.current.resetFields();
    if (onReset) onReset(formRef);
  };

  return (
    <Layout.Sider width={visible ? width : 0} {...others} style={{ transition: 'none', ...style }}>
      <Layout className="wq-page-query" style={{ height: '100%' }}>
        <Layout.Header className="wq-page-query-header">
          <Row>
            <Col flex="auto">查询条件</Col>
            <Col>
              <Space>
                <span onClick={() => handleToggle(false)} style={{ cursor: 'pointer' }}>
                  <ArrowRightOutlined />
                </span>
              </Space>
            </Col>
          </Row>
        </Layout.Header>
        <Layout.Content className="wq-page-query-content">
          <Form ref={formRef} layout="vertical" autoComplete="off">
            {children}
          </Form>
        </Layout.Content>
        <Layout.Footer className="wq-page-query-footer">
          <Row>
            <Col span={12} style={{ paddingRight: 5 }}>
              <Button type="primary" block onClick={handleSearch}>
                确定
              </Button>
            </Col>
            <Col span={12} style={{ paddingLeft: 5 }}>
              <Button block onClick={handleReset}>
                重置
              </Button>
            </Col>
          </Row>
        </Layout.Footer>
      </Layout>
    </Layout.Sider>
  );
});

export default Query;
