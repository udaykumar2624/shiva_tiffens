import React from 'react';
export function Sidebar({children, className=''}) { return <aside className={className + ' w-72'}>{children}</aside>; }
export function SidebarHeader({children, className=''}) { return <div className={className}>{children}</div>; }
export function SidebarContent({children, className=''}) { return <div className={className}>{children}</div>; }
export function SidebarFooter({children, className=''}) { return <div className={className}>{children}</div>; }
export function SidebarProvider({children}) { return <div className='flex'>{children}</div>; }
export function SidebarTrigger(props) { return <button {...props}>☰</button>; }
export function SidebarGroup({children}) { return <div className='p-2'>{children}</div>; }
export function SidebarGroupLabel({children, className=''}) { return <div className={className}>{children}</div>; }
export function SidebarGroupContent({children}) { return <div>{children}</div>; }
export function SidebarMenu({children}) { return <ul className='space-y-1'>{children}</ul>; }
export function SidebarMenuItem({children}) { return <li>{children}</li>; }
export function SidebarMenuButton({children, asChild, className=''}) { return <div className={className}>{children}</div>; }
