export default (state = [], action) => {
  switch (action.type) {
      case 'ADD_TODO':
        return {
            id: action.id,
            text: action.text,
            complete: false
          };

      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          completed:!state.completed
        };

      default:
        return state;
  }
}
