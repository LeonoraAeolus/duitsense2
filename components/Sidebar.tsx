'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, User, BookOpen, Settings, Wallet } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'My Profile', href: '/profile', icon: User },
    { name: 'Knowledge Hub', href: '/knowledge', icon: BookOpen },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full shrink-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-100">
        <Wallet className="w-6 h-6 text-[#2962FF] mr-2" />
        <span className="font-bold text-lg tracking-tight text-slate-900">DuitSense AI</span>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#2962FF]/10 text-[#2962FF]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-[#2962FF]' : 'text-slate-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#2962FF] text-white flex items-center justify-center font-bold text-sm">
            A
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-900">Amir</p>
            <p className="text-xs text-slate-500">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
