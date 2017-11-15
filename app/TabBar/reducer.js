import { MainTabs } from './routes'

export const reducer = (state, action) => {
    switch (action.type) {
        case 'JUMP_TO_TAB':
            console.log('reducer: JUMP_TO_TAB')
            console.log('state:', state)
            console.log('action:', action)
            return { ...state, index: action.payload.index }

        case 'Navigation/NAVIGATE':
            console.log('Navigate to', action.routeName)
            return MainTabs.router.getStateForAction(action, state)

        case 'Navigation/BACK':
            console.log('Navigate back to', action.routeName)
            return MainTabs.router.getStateForAction(action, state)

        default:
            console.log('reducer: default')
            console.log('state:', state)
            console.log('action:', action)
            return MainTabs.router.getStateForAction(action, state)
    }
}

