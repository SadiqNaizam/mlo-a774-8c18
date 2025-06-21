import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface TopHeaderProps {
  onMenuClick?: () => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex justify-between items-center h-16 px-6 bg-background border-b">
      <h1 className="text-xl font-semibold text-foreground">Dashboard User</h1>
      <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
       <div className="hidden md:flex items-center">
          <Button variant="ghost" size="icon">
             <Menu className="h-6 w-6" />
          </Button>
       </div>
    </header>
  );
};

export default TopHeader;
