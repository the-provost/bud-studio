/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const generateInitialState = (): any => {
  const panelArray = [
    {
      status: 'todo',
      headerText: 'To-do',
      colorIcon: '#939AFF',
      items: [
        {
          title: 'Check for meetings 1',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 2,
          checklist: {
            checked: 2,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [
            {
              title: 'Check for sub-meetings 1',
              description: '',
              siconValue: 2,
              checklist: {
                checked: 2,
                total: 6,
              },
              imagesData: ['', ''],
              page: true,
              flag: true,
              recurring: true,
            },
            {
              title: 'Check for sub-meetings 2',
              description: '',
              siconValue: 2,
              checklist: {
                checked: 2,
                total: 6,
              },
              imagesData: ['', ''],
              page: true,
              flag: true,
              recurring: true,
            },
          ],
        },
        {
          title: 'Check for meetings 2',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 1,
          checklist: {
            checked: 4,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [],
        },
        {
          title: 'Check for meetings 3',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 3,
          checklist: {
            checked: 3,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [],
        },
      ],
    },
    {
      status: 'inprogress',
      headerText: 'In-progress',
      colorIcon: '#FFD976',
      items: [
        {
          title: 'In progress meetings 1',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 2,
          checklist: {
            checked: 2,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [
            {
              title: 'In progress sub-meetings 1',
              description: '',
              siconValue: 2,
              checklist: {
                checked: 2,
                total: 6,
              },
              imagesData: ['', ''],
              page: true,
              flag: true,
              recurring: true,
            },
            {
              title: 'In progress sub-meetings 2',
              description: '',
              siconValue: 2,
              checklist: {
                checked: 2,
                total: 6,
              },
              imagesData: ['', ''],
              page: true,
              flag: true,
              recurring: true,
            },
          ],
        },
        {
          title: 'In progress meetings 2',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 1,
          checklist: {
            checked: 4,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [],
        },
        {
          title: 'In progress meetings 3',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 3,
          checklist: {
            checked: 3,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [],
        },
      ],
    },
    {
      status: 'inreview',
      headerText: 'In-review',
      colorIcon: '#4184E9',
      items: [
        {
          title: 'In-review meetings 1',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 2,
          checklist: {
            checked: 2,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [
            {
              title: 'In-review sub-meetings 1',
              description: '',
              siconValue: 2,
              checklist: {
                checked: 2,
                total: 6,
              },
              imagesData: ['', ''],
              page: true,
              flag: true,
              recurring: true,
            },
            {
              title: 'In-review sub-meetings 2',
              description: '',
              siconValue: 2,
              checklist: {
                checked: 2,
                total: 6,
              },
              imagesData: ['', ''],
              page: true,
              flag: true,
              recurring: true,
            },
          ],
        },
        {
          title: 'In-review meetings 2',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 1,
          checklist: {
            checked: 4,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [],
        },
        {
          title: 'In-review meetings 3',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 3,
          checklist: {
            checked: 3,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [],
        },
      ],
    },
    {
      status: 'completed',
      headerText: 'Completed',
      colorIcon: '#36D95A',
      items: [
        {
          title: 'Completed meetings 1',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 2,
          checklist: {
            checked: 2,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [
            {
              title: 'Completed sub-meetings 1',
              description: '',
              siconValue: 2,
              checklist: {
                checked: 2,
                total: 6,
              },
              imagesData: ['', ''],
              page: true,
              flag: true,
              recurring: true,
            },
            {
              title: 'Completed sub-meetings 2',
              description: '',
              siconValue: 2,
              checklist: {
                checked: 2,
                total: 6,
              },
              imagesData: ['', ''],
              page: true,
              flag: true,
              recurring: true,
            },
          ],
        },
        {
          title: 'Completed meetings 2',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 1,
          checklist: {
            checked: 4,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [],
        },
        {
          title: 'Completed meetings 3',
          description:
            'Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.',
          siconValue: 3,
          checklist: {
            checked: 3,
            total: 6,
          },
          imagesData: ['', ''],
          page: true,
          flag: true,
          recurring: true,
          childs: [],
        },
      ],
    },
  ];

  const newTaskClicked = false;
  const initialData = {
    panelArray,
    newTaskClicked,
  };
  return initialData;
};

export const listSlice = createSlice({
  name: 'list',
  initialState: generateInitialState,
  reducers: {
    setNewTaskClicked: (state, action: PayloadAction<any>) => {
      state.newTaskClicked = action.payload;
    },
    createNewTask: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      const tempObj = {
        title: action.payload.titleInput,
        description: '',
        siconValue: 0,
        checklist: {
          checked: 0,
          total: 1,
        },
        imagesData: [],
        page: false,
        flag: false,
        recurring: false,
        childs: [],
      };
      state.panelArray[action.payload.selectedItem].items.push(tempObj);
    },
    updatePosition: (state, action: PayloadAction<any>) => {
      const mapping = { todo: 0, inprogress: 1, inreview: 2, completed: 3 };
      const { source, destination, draggableId } = action.payload;
      if (destination === undefined || destination === null) return null;
      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return null;

      const start = state.panelArray[mapping[source.droppableId]];
      const end = state.panelArray[mapping[destination.droppableId]];
      const draggedItem = start.items[source.index];
      start.items.splice(source.index, 1);
      end.items.splice(destination.index, 0, draggedItem);
      const updatedPanelArray = [...state.panelArray];
      state.panelArray = updatedPanelArray;
    },
  },
});

export const { setNewTaskClicked, createNewTask, updatePosition } =
  listSlice.actions;
export default listSlice.reducer;