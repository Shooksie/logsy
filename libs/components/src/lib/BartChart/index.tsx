// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    country: 'AD',
    'hot dog': 102,
    'hot dogColor': 'hsl(13, 70%, 50%)',
    burger: 178,
    burgerColor: 'hsl(17, 70%, 50%)',
    sandwich: 109,
    sandwichColor: 'hsl(347, 70%, 50%)',
    kebab: 172,
    kebabColor: 'hsl(141, 70%, 50%)',
    fries: 136,
    friesColor: 'hsl(94, 70%, 50%)',
    donut: 186,
    donutColor: 'hsl(189, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 125,
    'hot dogColor': 'hsl(61, 70%, 50%)',
    burger: 74,
    burgerColor: 'hsl(30, 70%, 50%)',
    sandwich: 61,
    sandwichColor: 'hsl(38, 70%, 50%)',
    kebab: 193,
    kebabColor: 'hsl(230, 70%, 50%)',
    fries: 128,
    friesColor: 'hsl(301, 70%, 50%)',
    donut: 152,
    donutColor: 'hsl(14, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 188,
    'hot dogColor': 'hsl(6, 70%, 50%)',
    burger: 131,
    burgerColor: 'hsl(228, 70%, 50%)',
    sandwich: 131,
    sandwichColor: 'hsl(311, 70%, 50%)',
    kebab: 45,
    kebabColor: 'hsl(41, 70%, 50%)',
    fries: 2,
    friesColor: 'hsl(324, 70%, 50%)',
    donut: 126,
    donutColor: 'hsl(311, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 150,
    'hot dogColor': 'hsl(191, 70%, 50%)',
    burger: 40,
    burgerColor: 'hsl(79, 70%, 50%)',
    sandwich: 30,
    sandwichColor: 'hsl(312, 70%, 50%)',
    kebab: 45,
    kebabColor: 'hsl(241, 70%, 50%)',
    fries: 161,
    friesColor: 'hsl(43, 70%, 50%)',
    donut: 62,
    donutColor: 'hsl(267, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 44,
    'hot dogColor': 'hsl(251, 70%, 50%)',
    burger: 199,
    burgerColor: 'hsl(78, 70%, 50%)',
    sandwich: 2,
    sandwichColor: 'hsl(285, 70%, 50%)',
    kebab: 129,
    kebabColor: 'hsl(279, 70%, 50%)',
    fries: 99,
    friesColor: 'hsl(103, 70%, 50%)',
    donut: 161,
    donutColor: 'hsl(351, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 118,
    'hot dogColor': 'hsl(51, 70%, 50%)',
    burger: 161,
    burgerColor: 'hsl(3, 70%, 50%)',
    sandwich: 127,
    sandwichColor: 'hsl(89, 70%, 50%)',
    kebab: 152,
    kebabColor: 'hsl(27, 70%, 50%)',
    fries: 135,
    friesColor: 'hsl(208, 70%, 50%)',
    donut: 144,
    donutColor: 'hsl(198, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 144,
    'hot dogColor': 'hsl(221, 70%, 50%)',
    burger: 164,
    burgerColor: 'hsl(201, 70%, 50%)',
    sandwich: 185,
    sandwichColor: 'hsl(304, 70%, 50%)',
    kebab: 190,
    kebabColor: 'hsl(261, 70%, 50%)',
    fries: 176,
    friesColor: 'hsl(97, 70%, 50%)',
    donut: 82,
    donutColor: 'hsl(320, 70%, 50%)',
  },
];

export const BarChart = () => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
