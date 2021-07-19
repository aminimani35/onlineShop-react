export const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const actionTypes = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT: "LOGOUT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        token: null,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      const { user, token } = action.payload;
      return {
        ...state,
        user: user,
        token: token,
        loading: true,
        error: null,
      };
    case actionTypes.LOGIN_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: error,
      };
    case actionTypes.LOGOUT:
     
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: error,
      };

    default:
      break;
  }
};
