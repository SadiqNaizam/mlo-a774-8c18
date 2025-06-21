import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pieChartData = [
  { name: 'Group A', value: 45 },
  { name: 'Group B', value: 55 },
];

const COLORS = ['hsl(var(--accent-secondary))', 'hsl(var(--primary))'];

const PieChartCard: React.FC = () => {
  return (
    <Card className="shadow-sm col-span-3 lg:col-span-1">
      <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip 
                 contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
              />
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">45%</span>
          </div>
        </div>
        <div className="w-full text-center space-y-2">
            <p className="text-sm text-muted-foreground">Lorem ipsum</p>
            <p className="text-sm text-muted-foreground">Lorem ipsum</p>
            <p className="text-sm text-muted-foreground">Lorem ipsum</p>
            <p className="text-sm text-muted-foreground">Lorem ipsum</p>
        </div>
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          Check Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
