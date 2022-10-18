const UPDATE_EDIT_TITLE_TYPE = 'planner/UPDATE_EDIT_TITLE';
const UPDATE_EDIT_TEXT_TYPE = 'planner/UPDATE_EDIT_TEXT';

export const updateEditTitleAction = (title) => ({ type: UPDATE_EDIT_TITLE_TYPE, title });
export const updateEditTextAction = (text) => ({ type: UPDATE_EDIT_TEXT_TYPE, text });

const initialState = {
  editItem: {
    editTitle: null,
    editText: null,
  },
  postItem: [],
};

function plannerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EDIT_TITLE_TYPE:
      return {
        ...state,
        editItem: {
          editTitle: action.title,
          editText: state.editItem.editText,
        },
      };
    case UPDATE_EDIT_TEXT_TYPE:
      return {
        ...state,
        editItem: {
          editTitle: state.editItem.editTitle,
          editText: action.text,
        },
      };
    default:
      return state;
  }
}

export default plannerReducer;
