import * as actionTypes from "../action-types/action-types";

export const setActiveUserId = (userId) => ({
  type: actionTypes.ACTIVE_USER_ID,
  payload: userId,
});

export const deleteContact = (userId) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: userId,
});

export const setTypingValue = (value) => ({
  type: actionTypes.TYPING,
  payload: value,
});

export const sendMessage = (message, userId, activeUserId) => ({
  type: actionTypes.SEND_MESSAGE,
  payload: { message, userId, activeUserId },
});
