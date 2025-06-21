import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { LucideProps } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  isPrimary?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, isPrimary = false }) => {
  const EarningIcon = () => (
    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
        <Icon className="h-4 w-4 text-success" />
    </div>
  );

  return (
    <Card
      className={cn(
        'shadow-sm',
        isPrimary && 'bg-primary text-primary-foreground'
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={cn(
          'text-sm font-medium',
          isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground'
        )}>
          {title}
        </CardTitle>
        {isPrimary ? <EarningIcon/> : <Icon className={cn('h-4 w-4', isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground')} />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
