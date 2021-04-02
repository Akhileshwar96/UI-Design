import {
  GET_DATA_LIST_FAILED,
  GET_DATA_LIST_LOADING,
  GET_DATA_LIST_SUCCESS,
} from '../actions/Types';

export const intialState = {
  dataList: [
    {
      id: 1,
      package: '399',
      validity: '28',
      dataPack: '1.5/day',
      description:
        'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days',
    },
    {
      id: 2,
      package: '399',
      validity: '28',
      dataPack: '1.5/day',
      description:
        'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days',
    },
    {
      id: 3,
      package: '399',
      validity: '28',
      dataPack: '1.5/day',
      description:
        'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days',
    },
  ],
  isDataListLoading: false,
};

const AppReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_DATA_LIST_SUCCESS: {
      return {
        ...state,
        dataList: action.payload,
      };
    }
    case GET_DATA_LIST_FAILED: {
      return action.payload;
    }
    case GET_DATA_LIST_LOADING: {
      return {
        ...state,
        isDataListLoading: true,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
