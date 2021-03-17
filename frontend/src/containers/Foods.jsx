import React, { Fragment, useReducer, useEffect } from 'react';

// reducers
import {
  foodsReducer,
  foodsActionTypes,
  initialState as foodsInitialState,
} from '../reducers/foods';

// apis
import { fetchFoods } from '../apis/foods';

// constants
import { REQUEST_STATE } from '../constants';

export const Foods = ({ match }) => { // match: react-router使用時に使うprops
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);
  useEffect(() => {
    dispatch({ type: foodsActionTypes.FETCHING });
    fetchFoods(match.params.restaurantsId)
      .then((data) => {
        dispatch({
          type: foodsActionTypes.FETCH_SUCCESS,
          payload: {
            foods: data.foods
          }
        });
      })
  }, [])

  return (
    <Fragment>
      {
        foodsState.fetchState === REQUEST_STATE.LOADING ?
          <Fragment>
            <p>LOADING...</p>
        </Fragment>
          :
          foodsState.foodsList.map(food =>
            <div key={food.id}>
              {food.name}
            </div>
          ) 
      }
    </Fragment>
  )
}