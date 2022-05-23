import { PrismaClient } from '@prisma/client';
import { serialize } from '../../utils/serialize';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { sumBy } from 'lodash';
import { DateFormat } from '../../components/DateFormat/DateFormat';

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
  const client = new PrismaClient();

  const { id } = context.query;

  const customer = await client.customer.findFirst({
    include: {
      address: true,
      jobs: true,
      transactions: true,
    },
    where: {
      id: Number(id),
    },
  });

  return {
    props: {
      customer,
    },
  };
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export function Customer({ customer }: any) {
  const { firstName, lastName, address, jobs, transactions } = customer;

  const balance = sumBy(transactions, (transaction: any) => {
    if (transaction.type === 'REFUND') {
      return transaction.amount * -1;
    }

    if (transaction.type === 'CHARGE') {
      return transaction.amount * -1;
    }

    return transaction.amount;
  });

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-400 flex-1 flex flex-col">
      <div className="flex flex-col px-7 py-10 text-center text-white">
        <div className="">
          <div className="text-3xl pb-0.5 font-medium">
            {lastName}, {firstName}
          </div>
          <div className="flex justify-center text-sm items-center mt-2">
            <div className="bg-white bg-opacity-10 px-2 py-1 rounded-md">
              {address.line1}, {address.postcode}
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="pb-1 text-sm font-medium">Your balance</div>
          <div className="text-4xl font-medium ">
            <span className="text-white text-opacity-75 text-2xl mr-1">£</span>
            <span>{balance.toFixed(2)}</span>
          </div>
        </div>

        <div className="pt-5 flex justify-center items-center">
          <div className="grid grid-flow-col gap-3">
            <button className="rounded-full w-14 h-14 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button className="rounded-full w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-400 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="rounded-full w-14 h-14 bg-gradient-to-r from-red-500 to-red-400 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
            <button className="rounded-full w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-5 container mx-auto bg-white rounded-t-2xl">
        <div className="rounded-xl p-5 text-white bg-gradient-to-r from-indigo-500 to-purple-500 text-center">
          <div>Next clean is on</div>
          <div className="text-2xl font-semibold">15th January</div>
        </div>

        <div className="pt-8">
          <div className="text-xl font-medium">Transactions</div>

          <div className="grid gap-4 py-4">
            {transactions.map(({ id, date, amount, type, metadata }: any) => (
              <div key={id} className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-gray-200 mr-2" />
                <div className="flex-1">
                  <div className="text-sm font-medium">
                    {metadata?.['description'] ?? type}
                  </div>
                  <div className="text-xs text-gray-600">
                    <DateFormat value={date} format="dd/MM/yyyy HH:mm" />
                  </div>
                </div>

                <div className="text-sm font-medium">
                  £{(amount * (type !== 'PAYMENT' ? -1 : 1)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
