import Link from 'next/link';
import React from 'react';

export function Sidebar() {
  return (
    <div className="p-2 bg-purple-100">
      <div>
        <Link href="/">
          <a>Dashboard</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Customers</a>
        </Link>
      </div>
    </div>
  );
}
