import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, ShoppingCart, Receipt, Settings, Phone, MapPin, Clock } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
  SidebarProvider, SidebarTrigger
} from "./components/ui/Sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Menu", url: "/menu", icon: BookOpen },
  { title: "Cart", url: "/cart", icon: ShoppingCart },
  { title: "Orders", url: "/orders", icon: Receipt },
  { title: "Admin", url: "/admin", icon: Settings },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-orange-50 to-yellow-50">
        <Sidebar className="border-r border-orange-200 bg-white/80">
          <SidebarHeader className="border-b border-orange-200 p-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Shiva Tiffin Center</h2>
                <p className="text-sm text-orange-600 font-medium">Authentic South Indian</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-orange-700 uppercase tracking-wider px-3 py-2">Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton className={`hover:bg-orange-100 hover:text-orange-700 transition-all duration-200 rounded-xl mb-1 ${location.pathname === item.url ? 'bg-orange-500 text-white' : 'text-gray-700'}`}>
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-orange-200 p-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold text-lg">STC</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">Fresh • Authentic • Delicious<br /><span className="text-orange-600 font-semibold">Since 1995</span></p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1">
          <header className="bg-white/80 border-b border-orange-200 px-6 py-4 md:hidden shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-orange-100 p-2 rounded-lg" />
              <h1 className="text-xl font-bold">Shiva Tiffin Center</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
