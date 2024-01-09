import { FC } from 'react'
import { Card } from '@mui/joy'
import { Bar, BarDatum, ComputedDatum } from '@nivo/bar';
import './ChartCard.css';
import { COLORS } from '../constants';

interface BarChartCardProps {
  data: BarDatum[];
  keys: string[];
}

const BarChartCard: FC<BarChartCardProps> = ({ data, keys }) => {

  const getColors = (bar: ComputedDatum<BarDatum>) => (COLORS[bar.id as keyof typeof COLORS]);

  return (
    <Card>
      <Bar
        data={data}
        keys={keys}
        indexBy="origin"
        margin={{ top: 50, right: 130, bottom: 50, left: 70 }}
        padding={0.3}
        innerPadding={1}
        maxValue={1}
        groupMode="grouped"
        layout="horizontal"
        colors={getColors}
        valueFormat=" >-0.2~%"
        borderRadius={3}
        width={530}
        height={450}
        axisBottom={{
          legend: 'ranking',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          legend: 'feature',
          legendPosition: 'middle',
          legendOffset: -60,
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}

      />
    </Card>
  )
}

export default BarChartCard;
