import { InferGetServerSidePropsType } from 'next';
import React from 'react';
import Link from 'next/link';
import db from '../db';

export async function getServerSideProps() {
  const customers = await db.customer.findMany({
    include: {
      address: true,
    },
  });

  return {
    props: {
      customers,
    },
  };
}

export function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { customers } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(({ id, firstName, lastName, address }) => (
            <tr key={id}>
              <td>
                <div>
                  <Link href={`/customer/${id}`}>
                    <a>
                      {firstName} {lastName}
                    </a>
                  </Link>
                </div>
              </td>
              <td>
                <div>
                  {address?.line1} {address?.postcode}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
