'use client';

import { RotateCwIcon, SearchIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

type Props = {
  query?: string;
};

export default function Search({ query }: Props) {
  const router = useRouter();

  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  function handleSearch(value: string) {
    const params = new URLSearchParams(window.location.search);

    if (value) {
      params.set('q', value);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className='relative mt-5 max-w-md'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <SearchIcon className='h-5 w-5 text-gray-400' />
        </div>
        <input
          type='text'
          name='search'
          autoComplete='off'
          id='search'
          className='block w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          placeholder='Search by name...'
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={query}
        />
      </div>

      {isPending && (
        <div className='absolute right-0 top-0 bottom-0  flex items-center justify-center '>
          <RotateCwIcon className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700' />
        </div>
      )}
    </div>
  );
}
