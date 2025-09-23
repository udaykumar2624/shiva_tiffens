import React from 'react';
export function Tabs({children}) { return <div>{children}</div>;}
export function TabsList({children, className=''}) { return <div className={className}>{children}</div>; }
export function TabsTrigger({children, value, className='', onClick}) { return <button onClick={() => onClick(value)} className={className}>{children}</button>; }
export function TabsContent({children, className=''}) { return <div className={className}>{children}</div>; }
