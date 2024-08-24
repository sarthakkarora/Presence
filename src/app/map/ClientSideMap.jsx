import dynamic from 'next/dynamic';

const ClientSideMap = dynamic(() => import('./MapComponent'), {
  ssr: false,
});

export default ClientSideMap;