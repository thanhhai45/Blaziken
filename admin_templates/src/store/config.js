import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

export default function (initialState = {}) {
    const logger = createLogger({
        collapsed: true,
        diff: true
    });
    
    // Middleware and store enhancers

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)))

    return store
}