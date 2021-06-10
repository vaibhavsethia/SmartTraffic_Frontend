import React from 'react'
import {useHistory} from 'react-router-dom'

function HistoryHooks(Component) {
  return function WrappedComponent(props) {
    let history = useHistory();
    return <Component {...props} history={history} />;
  }
}

export default HistoryHooks