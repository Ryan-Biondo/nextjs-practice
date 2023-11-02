import Link from 'next/link';
import React from 'react';
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
  sortDirection: string;
}

const UserTable = async ({ sortOrder, sortDirection }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store',
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users)[sortDirection === 'desc' ? 'desc' : 'asc'](
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link
                href={`/users?sortOrder=name&sortDirection=${
                  sortOrder === 'name' && sortDirection === 'asc'
                    ? 'desc'
                    : 'asc'
                }`}>
                Name
              </Link>
            </th>
            <th>
              <Link
                href={`/users?sortOrder=email&sortDirection=${
                  sortOrder === 'email' && sortDirection === 'asc'
                    ? 'desc'
                    : 'asc'
                }`}>
                Email
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
