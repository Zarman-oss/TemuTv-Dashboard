'use client';

import { Card, Title } from '@tremor/react';

const data = [
  {
    Month: 'Jan 21',
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: 'Feb 21',
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: 'Mar 21',
    Sales: 3890, 
    Profit: 2980,
  },
];

export default function Chart() {
  return (
    <Card>
      <Title>Performance</Title>
    </Card>
  );
}
