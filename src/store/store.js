import { configureStore } from "@reduxjs/toolkit";

import {
  activeUserIdReducer,
  contactsReducer,
  messagesReducer,
  typingReducer,
  userReducer,
} from "../reducers/reducers";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
    messages: messagesReducer,
    typing: typingReducer,
    activeUserId: activeUserIdReducer,
  },
});
