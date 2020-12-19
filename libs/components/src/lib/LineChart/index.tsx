import { ResponsiveLine } from '@nivo/line';
import React from 'react';

const data = [
  {
    id: 'japan',
    color: 'hsl(142, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 142,
      },
      {
        x: 'helicopter',
        y: 134,
      },
      {
        x: 'boat',
        y: 129,
      },
      {
        x: 'train',
        y: 66,
      },
      {
        x: 'subway',
        y: 20,
      },
      {
        x: 'bus',
        y: 24,
      },
      {
        x: 'car',
        y: 236,
      },
      {
        x: 'moto',
        y: 16,
      },
      {
        x: 'bicycle',
        y: 108,
      },
      {
        x: 'horse',
        y: 198,
      },
      {
        x: 'skateboard',
        y: 82,
      },
      {
        x: 'others',
        y: 139,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(90, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 34,
      },
      {
        x: 'helicopter',
        y: 174,
      },
      {
        x: 'boat',
        y: 157,
      },
      {
        x: 'train',
        y: 130,
      },
      {
        x: 'subway',
        y: 238,
      },
      {
        x: 'bus',
        y: 18,
      },
      {
        x: 'car',
        y: 135,
      },
      {
        x: 'moto',
        y: 265,
      },
      {
        x: 'bicycle',
        y: 85,
      },
      {
        x: 'horse',
        y: 298,
      },
      {
        x: 'skateboard',
        y: 37,
      },
      {
        x: 'others',
        y: 153,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(6, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 249,
      },
      {
        x: 'helicopter',
        y: 214,
      },
      {
        x: 'boat',
        y: 129,
      },
      {
        x: 'train',
        y: 30,
      },
      {
        x: 'subway',
        y: 208,
      },
      {
        x: 'bus',
        y: 250,
      },
      {
        x: 'car',
        y: 291,
      },
      {
        x: 'moto',
        y: 138,
      },
      {
        x: 'bicycle',
        y: 184,
      },
      {
        x: 'horse',
        y: 218,
      },
      {
        x: 'skateboard',
        y: 84,
      },
      {
        x: 'others',
        y: 187,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(234, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 279,
      },
      {
        x: 'helicopter',
        y: 294,
      },
      {
        x: 'boat',
        y: 230,
      },
      {
        x: 'train',
        y: 114,
      },
      {
        x: 'subway',
        y: 190,
      },
      {
        x: 'bus',
        y: 23,
      },
      {
        x: 'car',
        y: 25,
      },
      {
        x: 'moto',
        y: 254,
      },
      {
        x: 'bicycle',
        y: 203,
      },
      {
        x: 'horse',
        y: 125,
      },
      {
        x: 'skateboard',
        y: 269,
      },
      {
        x: 'others',
        y: 99,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(10, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 106,
      },
      {
        x: 'helicopter',
        y: 278,
      },
      {
        x: 'boat',
        y: 237,
      },
      {
        x: 'train',
        y: 278,
      },
      {
        x: 'subway',
        y: 180,
      },
      {
        x: 'bus',
        y: 295,
      },
      {
        x: 'car',
        y: 202,
      },
      {
        x: 'moto',
        y: 263,
      },
      {
        x: 'bicycle',
        y: 147,
      },
      {
        x: 'horse',
        y: 196,
      },
      {
        x: 'skateboard',
        y: 158,
      },
      {
        x: 'others',
        y: 169,
      },
    ],
  },
];
export const LineChart = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
