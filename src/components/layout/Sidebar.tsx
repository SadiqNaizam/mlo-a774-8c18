import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Home, FileText, Mail, Bell, MapPin, BarChart2, User } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive = false }) => (
  <li>
    <a
      href={href}
      className={cn(
        'flex items-center gap-4 py-2 px-3 rounded-md text-sm capitalize font-medium',
        'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors',
        isActive && 'bg-primary-foreground/10 text-primary-foreground'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  </li>
);

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const navLinks = [
    { href: '#', icon: Home, label: 'home', isActive: true },
    { href: '#', icon: FileText, label: 'file' },
    { href: '#', icon: Mail, label: 'messages' },
    { href: '#', icon: Bell, label: 'notification' },
    { href: '#', icon: MapPin, label: 'location' },
    { href: '#', icon: BarChart2, label: 'graph' },
  ] as const;

  return (
    <aside className={cn("flex flex-col w-64 h-full bg-primary text-primary-foreground p-6", className)}>
      <div className="flex flex-col items-center gap-4 pt-6 pb-8 border-b border-primary-foreground/20">
        <div className="relative p-1 bg-black/20 rounded-full shadow-lg">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">JOHN DON</h2>
          <p className="text-sm text-primary-foreground/70">johndon@company.com</p>
        </div>
      </div>
      
      <nav className="flex-1 mt-8">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
