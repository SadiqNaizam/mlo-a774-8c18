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
  <a
    href={href}
    className={cn(
      'flex items-center gap-4 py-2 px-3 rounded-md text-sm font-medium',
      'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors',
      isActive && 'bg-primary-foreground/10 text-primary-foreground'
    )}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </a>
);

const SidebarNav: React.FC = () => {
  const navLinks = [
    { href: '#', icon: Home, label: 'home', isActive: true },
    { href: '#', icon: FileText, label: 'file' },
    { href: '#', icon: Mail, label: 'messages' },
    { href: '#', icon: Bell, label: 'notification' },
    { href: '#', icon: MapPin, label: 'location' },
    { href: '#', icon: BarChart2, label: 'graph' },
  ] as const;

  return (
    <aside className="w-64 bg-primary text-primary-foreground p-6 flex flex-col h-screen fixed top-0 left-0">
      <div className="flex flex-col items-center gap-4 py-6 border-b border-primary-foreground/20">
        <Avatar className="h-24 w-24 border-4 border-primary-foreground/20">
          <AvatarFallback className="bg-primary-foreground/10">
            <User className="h-12 w-12 text-primary-foreground" />
          </AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-bold">JOHN DON</h2>
          <p className="text-sm text-primary-foreground/70">johndon@company.com</p>
        </div>
      </div>
      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavItem {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNav;
