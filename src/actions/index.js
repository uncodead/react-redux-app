let nextTodoId = 0
export const addTodo = (text) => {
    nextTodoId++;
    return { 
        type: 'ADD_TODO', 
        text, 
        id: nextTodoId
    };
}

export const showAll = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL'
    }
}

export const showDone = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_DONE'
    }
}

export const showTodo = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_TODO'
    }
}


export const toggleTodo = (id) => {
    return { 
        type: 'TOGGLE_TODO',
        id
    };
}

export const increment = () => {
    return { 
        type: 'INCREMENT'
    };
}

export const decrement = () => {
    return { 
        type: 'DECREMENT'
    };
}