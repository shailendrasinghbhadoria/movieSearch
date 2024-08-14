const initialData = {
  list: [],
};

const toDoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADDTODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [...state.list, { id: id, data: data }],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => {
        return elem.id !== action.id;
      });

      return {
        list: newList,
      };

    case "REMOVE_TODO":
      return {
        list: [],
      };

    default:
      return state;
  }
};

export default toDoReducers;
