import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 527 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 1h527' stroke='#B5B3B3' />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
