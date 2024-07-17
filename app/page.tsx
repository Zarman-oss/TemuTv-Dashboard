import Search from '@/components/Search';
import UsersTable from '@/components/UsersTable';
import { Card, Text, Title } from '@tremor/react';

export default function Home() {
  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Title>Users</Title>
      <Text>Users stored in database</Text>
      <Search />
      <Card className='mt-6'> 
        <UsersTable/>
      </Card>
    </main>
  );
}
