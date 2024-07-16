'use client';

import { BarList, Card, Flex, Grid, Metric, Text, Title } from '@tremor/react';
import Chart from '@/components/Chart';

const newUserStats = [
  { name: 'New Users', value: 230 },
  { name: 'Returning Users', value: 451 },
];

const activeUsers = [
  { name: 'Active Users (Today)', value: 128 },
  { name: 'Active Users (This Week)', value: 751 },
];

const subscriptionStats = [
  { name: 'Free Subscriptions', value: 120 },
  { name: 'Premium Subscriptions', value: 75 },
  { name: 'Trial Subscriptions', value: 47 },
];

const data = [
  {
    category: 'User Engagement',
    stat: '1,078',
    data: newUserStats,
  },
  {
    category: 'Active Users',
    stat: '879',
    data: activeUsers,
  },
  {
    category: 'Subscription Plans',
    stat: '242',
    data: subscriptionStats,
  },
];

export default function Analytics() {
  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Grid numItemsSm={2} numItemsLg={3} className='gap-6'>
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent='start'
              alignItems='baseline'
              className='space-x-2'
            >
              <Metric>{item.stat}</Metric>
              <Text>Total</Text>
            </Flex>
            <Flex className='mt-6'>
              <Text>Name</Text>
              <Text className='text-right'>Count</Text>
            </Flex>
            <BarList
              data={item.data}
              color='blue'
              className='mt-2'
              valueFormatter={(number: number) => {
                return Intl.NumberFormat('us').format(number).toString();
              }}
            />
          </Card>
        ))}
      </Grid>
      <Chart />   
    </main>
  );
}
