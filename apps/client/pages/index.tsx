import React from 'react';

export function Home() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="grid gap-3 grid-cols-2">
        <div className="w-32 h-32 bg-gray-200 overflow-hidden">
          <img
            style={{
              objectPosition: 'center',
              objectFit: 'cover',
              height: '100%',
              width: '100%'
            }}
            src={
              'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2542'
            }
          />
        </div>
        <div className="w-32 h-32 bg-gray-200 overflow-hidden">
          <img
            style={{
              objectPosition: 'center',
              objectFit: 'cover',
              height: '100%',
              width: '100%'
            }}
            src={
              'https://images.unsplash.com/photo-1429704658776-3d38c9990511?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2579'
            }
          />
        </div>
        <div className="w-32 h-32 bg-gray-200 overflow-hidden">
          <img
            style={{
              objectPosition: 'center',
              objectFit: 'cover',
              height: '100%',
              width: '100%'
            }}
            src={
              'https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2234'
            }
          />
        </div>
        <div className="w-32 h-32 bg-gray-200 overflow-hidden">
          <img
            style={{
              objectPosition: 'center',
              objectFit: 'cover',
              height: '100%',
              width: '100%'
            }}
            src={
              'https://images.unsplash.com/photo-1531129915305-9e84bb5a4b15?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
