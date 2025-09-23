import React from 'react';
export function Badge({children, className=''}) {
  return <span className={'inline-block text-sm px-2 py-1 rounded-full ' + className}>{children}</span>;
}
export default Badge;
