import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, className }) => {
  return (
    <header 
      className={cn(
        "flex justify-between items-center h-16 px-6 bg-background border-b shadow-sm", 
        className
      )}
    >
      <h1 className="text-xl font-semibold text-foreground">Dashboard User</h1>
      
      <Button variant="ghost" size="icon" onClick={onMenuToggle}>
        <Menu className="h-6 w-6 text-muted-foreground" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </header>
  );
};

export default Header;
