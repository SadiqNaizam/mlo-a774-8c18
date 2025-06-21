import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const barChartData = [
  { name: 'JAN', '2019': 18, '2020': 38 },
  { name: 'FEB', '2019': 28, '2020': 42 },
  { name: 'MAR', '2019': 15, '2020': 32 },
  { name: 'APR', '2019': 24, '2020': 8 },
  { name: 'MAY', '2019': 34, '2020': 18 },
  { name: 'JUNE', '2019': 25, '2020': 45 },
  { name: 'JULY', '2019': 34, '2020': 14 },
  { name: 'AUG', '2019': 22, '2020': 18 },
  { name: 'SEP', '2019': 38, '2020': 25 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-lg">
        <p className="font-bold">{label}</p>
        <p style={{ color: payload[0].color }}>{`2019: ${payload[0].value}`}</p>
        <p style={{ color: payload[1].color }}>{`2020: ${payload[1].value}`}</p>
        {payload[1].name === '2020' && label === 'JUNE' && 
            <div className='mt-2 pt-2 border-t'>
                <p className='text-xs font-bold bg-primary text-primary-foreground p-1 rounded-sm inline-block'>28.79</p>
            </div>
        }
      </div>
    );
  }
  return null;
};

const BarChartCard: React.FC = () => {
  return (
    <Card className="shadow-sm col-span-3 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Result</CardTitle>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent"></div>
                <span className="text-xs text-muted-foreground">2019</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary"></div>
                <span className="text-xs text-muted-foreground">2020</span>
            </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-8 text-xs">Check Now</Button>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))' }} />
            <Bar dataKey="2019" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="2020" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
