import React, { useEffect, useState } from 'react';
import createPersistedState from 'use-persisted-state';
// const useGridState = createPersistedState('grid');
import { keyBy } from 'lodash';
import styled from 'styled-components';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import { GridComponent, GridItemLayout } from '@logsy/grid-management';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { ResponsiveLine } from '@nivo/line';
import { useForm } from 'react-hook-form';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  useCreateGridMutation,
  useGetExistingGridsQuery,
  useGetGridLazyQuery,
} from '../types';

const StyledApp = styled.div`
  background-color: rgb(17, 23, 27);
  font-family: sans-serif;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .drawer-handle {
    display: none;
  }

  .scroll-body {
    flex: 1;
    overflow-y: scroll;
  }
`;

const StyledDrawer = styled(Drawer)`
  .drawer-handle {
    display: none;
  }
`;

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const TestGrid: GridItemLayout[] = [
  { kind: 'line-chart', i: 'a', x: 0, y: 0, w: 1, h: 2, minW: 2 },
  { kind: 'line-chart', i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2 },
  { kind: 'line-chart', i: 'c', x: 4, y: 0, w: 1, h: 2, minW: 2 },
];

// Hook

function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value

  // Pass initial state function to useState so logic is only executed once

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key

      const item = window.localStorage.getItem(key);

      // Parse stored json or if none return initialValue

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue

      console.log(error);

      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...

  // ... persists the new value to localStorage.

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState

      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state

      setStoredValue(valueToStore);

      // Save to local storage

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case

      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export const useGrid = () => {
  const [grid, setGrid] = useState<GridItemLayout[]>([]);

  const AddWidget = async (kind = 'line-chart') => {
    setGrid((curr) => [
      ...curr,
      {
        kind,
        i: uuidv4(),
        x: 0,
        y: 10,
        w: 12,
        h: 2,
        minW: 2,
      },
    ]);
  };

  const LayoutChange = (gridParam: GridItemLayout[]) => {
    setGrid((grid) => {
      const indexItems = keyBy(grid, 'i');
      return gridParam.map((items) => {
        return { ...(indexItems[items.i] || {}), ...items };
      });
    });
  };

  return { grid, AddWidget, LayoutChange, setGrid };
};

const formToJSON = (elements) =>
  [].reduce.call(
    elements,
    (data, element) => {
      data[element.name] = element.value;
      return data;
    },
    {}
  );

export function App() {
  const { grid, LayoutChange, AddWidget, setGrid } = useGrid();
  const [open, setOpen] = useState<boolean>(false);
  const [gridId, setGridId] = useState<string>();
  const [mutate, { loading: saveLoading }] = useCreateGridMutation();
  const { data, loading: gridsLoading } = useGetExistingGridsQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      const gridList = data?.grid;
      if (gridList?.length) {
        setGridId(gridList[0].id);
      }
    },
  });
  const [
    fetchData,
    { loading, data: gridData, called, error },
  ] = useGetGridLazyQuery({
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      setGrid(data?.grid_by_pk?.grid || []);
    },
  });
  const { register, handleSubmit, watch, errors } = useForm();
  useEffect(() => {
    if (gridId) {
      console.log('here', gridId);
      fetchData({
        variables: {
          id: gridId,
        },
      });
    }
  }, [gridId]);

  const onSubmit = (data) => {
    console.log(data);
    AddWidget(data.kind);
  };

  return (
    <StyledApp>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Navbar>
      <div className={'scroll-body'}>
        <div className={'d-flex  border-bottom'}>
          <div className={'col-9 d-flex align-items-center'}>
            <DropdownButton
              id="dropdown-basic-button"
              title={gridId || 'Choose Report'}
            >
              {data?.grid?.map((grid) => (
                <Dropdown.Item
                  key={grid.id}
                  onClick={() => {
                    setGridId(grid.id);
                  }}
                >
                  {grid?.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className={'col d-flex justify-content-end p-2'}>
            <Button
              className={'mx-1'}
              variant="outline-primary"
              onClick={() => setOpen((curr) => !curr)}
            >
              New Item
            </Button>
            <Button
              className={'mx-1'}
              variant="outline-primary"
              onClick={() => {
                const uuid = uuidv4();
                setGridId(uuid);
                setGrid([]);
              }}
            >
              New Report
            </Button>
            <Button
              className={'mx-1'}
              variant="outline-primary"
              onClick={() =>
                mutate({
                  variables: {
                    grid: grid,
                    name: uuidv4(),
                    owner: uuidv4(),
                    id: gridId || uuidv4(),
                  },
                }).then(({ data }) => setGridId(data?.insert_grid_one?.id))
              }
            >
              Save
            </Button>
          </div>
        </div>
        {gridsLoading || !called || loading ? (
          <Spinner animation="grow" />
        ) : (
          <GridComponent gridItems={grid} onChange={LayoutChange} />
        )}
      </div>

      <StyledDrawer
        width={'30vw'}
        className={'d-flex'}
        placement={'right'}
        open={open}
        onClick={() => setOpen(false)}
      >
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className={'h-100 d-flex flex-column'}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={'border-bottom p-3'}>
            <h5>Add New Item</h5>
          </div>
          <div className={'col'}>
            <Form.Group controlId="WidgetForm.ControlInput1">
              <Form.Label>Widget Label</Form.Label>
              <Form.Control
                ref={register}
                placeholder="widget name"
                name={'name'}
              />
            </Form.Group>
            <Form.Group controlId="WidgetForm.ControlSelect1">
              <Form.Label>Widget Type</Form.Label>
              <Form.Control ref={register} as="select" name={'kind'}>
                <option value="line-chart">Line Chart</option>
                <option value="pie-chart">Pie Chart</option>
                <option value="bar-chart">Bar Chart</option>
                <option value="area-chart">Area Chart</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className={'border-top p-2 d-flex justify-content-end'}>
            <Button type={'submit'}>Add Item</Button>
          </div>
        </Form>
      </StyledDrawer>
    </StyledApp>
  );
}

export default App;
