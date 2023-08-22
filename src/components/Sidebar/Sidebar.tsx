'use client';

import { cn } from '@/lib/utils';
import { ROUTES } from './Sidebar.constants';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigate = (url: string, pro: boolean) => {
    return router.push(url);
  };

  return (
    <div className="flex flex-col h-full space-y-4 text-primary bg-secondary">
      <div className="flex justify-center flex-1 p-3">
        <div className="space-y-2">
          {ROUTES.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              key={route.label}
              className={cn(
                'text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition',
                pathname === route.href && 'bg-primary/10 text-primary',
              )}
            >
              <div className="flex flex-col items-center flex-1 gap-y-2">
                <route.icon className="w-5 h-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
