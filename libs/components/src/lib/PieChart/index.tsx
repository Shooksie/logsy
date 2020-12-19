// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie';
import React from 'react';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    id: 'stylus',
    label: 'stylus',
    value: 506,
    color: 'hsl(97, 70%, 50%)',
  },
  {
    id: 'hack',
    label: 'hack',
    value: 124,
    color: 'hsl(154, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 332,
    color: 'hsl(259, 70%, 50%)',
  },
  {
    id: 'go',
    label: 'go',
    value: 48,
    color: 'hsl(277, 70%, 50%)',
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 204,
    color: 'hsl(215, 70%, 50%)',
  },
];

export const PieChart = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: 'nivo' }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextColor="#333333"
    radialLabelsLinkColor={{ from: 'color' }}
    sliceLabelsSkipAngle={10}
    sliceLabelsTextColor="#333333"
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'ruby',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'c',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'go',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'python',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'scala',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'lisp',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'elixir',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'javascript',
        },
        id: 'lines',
      },
    ]}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
);
