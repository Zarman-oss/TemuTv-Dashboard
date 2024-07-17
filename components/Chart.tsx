'use client';

import { Card, Text, Title, AreaChart } from '@tremor/react';

const data = [
  {
    Month: 'Jan 21',
    Sales: 3000,
    Profit: 2200,
    Unsubscribed: 50,
  },
  {
    Month: 'Feb 21',
    Sales: 2100,
    Profit: 1700,
    Unsubscribed: 70,
  },
  {
    Month: 'Mar 21',
    Sales: 4500,
    Profit: 3800,
    Unsubscribed: 30,
  },
  {
    Month: 'Apr 21',
    Sales: 3200,
    Profit: 2900,
    Unsubscribed: 40,
  },
  {
    Month: 'May 21',
    Sales: 5100,
    Profit: 4100,
    Unsubscribed: 20,
  },
];

export default function Chart() {
  return (
    <Card className='mt-8'>
      <Title>Performance</Title>
      <Text>Comparison between sales, profit, and unsubscribed</Text>
      <AreaChart
        className='mt-4 h-80'
        data={data}
        categories={['Sales', 'Profit', 'Unsubscribed']}
        index='Month'
        colors={['indigo', 'fuchsia', 'amber']}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat('us').format(number)}`
        }
        yAxisWidth={60}
        tooltip
      />
    </Card>
  );
}
