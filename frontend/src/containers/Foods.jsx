import React, { Fragment } from 'react';;

export const Foods = ({ match }) => { // match: react-router使用時に使うprops
  return (
    <Fragment>
      フード一覧
      <p>
        restaurantsIdは {match.params.restaurantsId} です
      </p>
    </Fragment>
  )
}