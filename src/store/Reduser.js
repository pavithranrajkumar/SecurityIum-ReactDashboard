export const initialState = {
  isSidebarExpanded: true,
  deviceType: "Mobile",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Update_Sidebar":
      return {
        ...state,
        isSidebarExpanded: action.payload,
      };
    case "Update_DeviceType":
      return {
        ...state,
        deviceType: action.payload,
      };

    default:
      return state;
  }
};
