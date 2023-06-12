import React from 'react';
import { Card } from 'antd';

type CardType = {
  [props: string]: any;
};

const YCard: React.FC<CardType> = (props) => {
  return <Card {...props} />;
};

export default YCard;
