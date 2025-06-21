import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const lineChartData = [
  { name: 'Jan', uv: 40, pv: 24 },
  { name: 'Feb', uv: 30, pv: 13 },
  { name: 'Mar', uv: 20, pv: 68 },
  { name: 'Apr', uv: 27, pv: 39 },
  { name: 'May', uv: 18, pv: 48 },
  { name: 'Jun', uv: 53, pv: 38 },
  { name: 'Jul', uv: 34, pv: 43 },
  { name: 'Aug', uv: 49, pv: 29 },
  { name: 'Sep', uv: 33, pv: 52 },
  { name: 'Oct', uv: 21, pv: 33 },
];

const LineChartCard: React.FC = () => {
  return (
    <Card className="shadow-sm col-span-3 lg:col-span-2">
      <CardHeader>
        <div className='flex justify-between items-center'>
            <CardTitle>Lorem Ipsum</CardTitle>
            <div className='flex items-center gap-4'>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-xs text-muted-foreground">Lorem</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs text-muted-foreground">Ipsum</span>
                </div>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={lineChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fontSize: 12}} hide={true} />
            <YAxis tickLine={false} axisLine={false} tick={{fontSize: 12}} hide={true} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
              labelStyle={{ fontWeight: 'bold' }}
            />
            <Area type="monotone" dataKey="pv" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorPv)" activeDot={{ r: 6 }} />
            <Area type="monotone" dataKey="uv" stroke="hsl(var(--accent))" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" activeDot={{ r: 6 }} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
