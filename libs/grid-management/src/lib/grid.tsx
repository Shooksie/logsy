import React, { useMemo } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import styled from 'styled-components';
import 'react-grid-layout/css/styles.css';

type GridItemKind = 'line-chart' | 'bar-chart' | 'pie-chart' | string;
import { Responsive, WidthProvider } from 'react-grid-layout';
import { LineChart, BarChart, PieChart } from '@logsy/components';

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface GridItemLayout extends Layout {
  kind: GridItemKind;
}

interface GridComponentProps {
  gridItems: GridItemLayout[];
  onChange: (gridItem: GridItemLayout[]) => void;
}

const GridItemDiv = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: white;
`;

const WidgetRenderFactory = ({ kind }: { kind: GridItemKind }) => {
  switch (kind) {
    case 'bar-chart':
      return <BarChart />;
    case 'line-chart':
      return <LineChart />;
    case 'pie-chart':
      return <PieChart />;
    default:
      return <div />;
  }
};

export const GridComponent = ({ gridItems, onChange }: GridComponentProps) => {
  const Grid = useMemo(
    () =>
      gridItems?.map(({ kind, ...gridItem }: GridItemLayout) => (
        <GridItemDiv key={gridItem.i} data-grid={gridItem}>
          <WidgetRenderFactory kind={kind} />
        </GridItemDiv>
      )),
    [JSON.stringify(gridItems)]
  );

  return (
    <ResponsiveGridLayout
      rowHeight={10}
      onLayoutChange={onChange}
      resizeHandles={['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']}
      className="layout"
      breakpoints={{ lg: 0 }}
      cols={{ lg: 100 }}
    >
      {Grid}
    </ResponsiveGridLayout>
  );
};
