import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';
interface Props {
  searchParams: { sortOrder: string; sortDirection: string };
}

const UsersPage = async ({
  searchParams: { sortOrder, sortDirection },
}: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} sortDirection={sortDirection} />
    </>
  );
};

export default UsersPage;
