import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.6 5 12 11.25 2.4 5V2.5L12 8.75l9.6-6.25V5Zm0-5H2.4C1.068 0 0 1.113 0 2.5v15c0 .663.253 1.299.703 1.768.45.469 1.06.732 1.697.732h19.2c.636 0 1.247-.263 1.697-.732.45-.47.703-1.105.703-1.768v-15c0-.663-.253-1.299-.703-1.768A2.352 2.352 0 0 0 21.6 0Z'
      fill='#E5E5E5'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
