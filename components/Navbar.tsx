'use client';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import Avvvatars from 'avvvatars-react';
import {
  BarChart2,
  LogIn,
  LogOut,
  LucideTv,
  Menu as MenuIcon,
  User,
  X as XIcon,
} from 'lucide-react';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Users', href: '/', icon: User },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  user: Session['user'];
};

export default function Navbar({ user }: Props) {
  const pathname = usePathname();

  return (
    <Disclosure as='nav' className='bg-white shadow-sm'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='text-blue-700 flex font-bold flex-shrink-0 items-center'>
                  <LucideTv className=' w-10 h-10' />
                  <span className=''>TemuTv</span>
                </div>

                <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'border-blue-500 text-blue-700'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      <item.icon className='mr-1 h-5 w-5' />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                      <span className='sr-only'>Open user menu</span>
                      {user?.image ? (
                        <Image
                          className='h-8 w-8 rounded-full'
                          src={user.image}
                          width={32}
                          height={32}
                          alt={user?.name ?? 'avatar'}
                        />
                      ) : (
                        <Avvvatars value={'User'} />
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as='div'
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {user ? (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex items-center w-full px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={() => signOut()}
                            >
                              <LogOut className='mr-2 h-4 w-4' />
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex items-center w-full px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={() => signIn('github')}
                            >
                              <LogIn className='mr-2 h-4 w-4' />
                              Sign in
                            </button>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            {({ open }) => (
              <Transition
                show={open}
                as='div'
                enter='transition ease-out duration-200'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <div className='space-y-1 pt-2 pb-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-150'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      <item.icon className='mr-2 h-5 w-5' />
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className='border-t border-gray-200 pt-4 pb-3'>
                  {user?.image ? (
                    <>
                      <div className='flex items-center px-4'>
                        <div className='flex-shrink-0'>
                          <Image
                            className='h-8 w-8 rounded-full'
                            src={user.image}
                            width={32}
                            height={32}
                            alt={user?.name ?? 'avatar'}
                          />
                        </div>
                        <div className='ml-3'>
                          <div className='text-base font-medium text-gray-800'>
                            {user.name}
                          </div>
                          <div className='text-sm font-medium text-gray-500'>
                            {user.email}
                          </div>
                        </div>
                      </div>
                      <div className='mt-3 space-y-1'>
                        <button
                          className='flex w-full items-center px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-150'
                          onClick={() => signOut()}
                        >
                          <LogOut className='mr-2 h-4 w-4' />
                          Sign out
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className='mt-3 space-y-1'>
                      <button
                        className='flex w-full items-center px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-150'
                        onClick={() => signIn('github')}
                      >
                        <LogIn className='mr-2 h-4 w-4' />
                        Sign in
                      </button>
                    </div>
                  )}
                </div>
              </Transition>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
