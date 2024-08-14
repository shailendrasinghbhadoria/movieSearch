export const addToDo = (data) => {
  return {
    type: "ADDTODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteToDO = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const removeToDO = () => {
  return {
    type: "REMOVE_TODO",
  };
};
