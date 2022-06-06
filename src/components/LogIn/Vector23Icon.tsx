import { memo, SVGProps } from 'react';

const Vector23Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 17 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='m1.5 8 5 3.5 8.5-10' stroke='#1E90FF' strokeWidth={3} />
  </svg>
);

const Memo = memo(Vector23Icon);
export { Memo as Vector23Icon };
