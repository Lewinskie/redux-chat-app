import * as actionTypes from "../action-types/action-types";

const initialState = {
  user: {
    userId: "karthik",
    name: "Karthik Jones",
    email: "test@email.com",
    profile_pic: "./images/image3.jpg",
    status: "Live and give, the best of your abilities",
  },
  messages: {
    doe: [
      {
        is_user_msg: false,
        userId: "doe",
        text: "Hello",
      },

      {
        is_user_msg: true,
        userId: "karthik",
        text: "Ssup",
      },
    ],
    doyle: [
      {
        is_user_msg: false,
        userId: "doyle",
        text: "You know redux?",
      },

      {
        is_user_msg: true,
        userId: "karthik",
        text: "I do bruv. Any gig?",
      },
    ],
  },
  typing: "",
  contacts: [
    {
      name: "John Doe",
      email: "doe@mail.com",
      profile_pic: "./images/image1.jpg",
      status: "As I wake up in the morning I give Jah praise",
      userId: "doe",
    },
    {
      name: "Doyle karim",
      email: "karim@mail.com",
      profile_pic: "./images/image2.jpg",
      status: "Now weve got this baby kicking!",
      userId: "doyle",
    },
    {
      name: "Lewis Maina",
      email: "maina@mail.com",
      profile_pic: "./images/image2.jpg",
      status: "Now weve got this baby kicking!",
      userId: "maina",
    },
  ],

  activeUserId: "karthik",
};

export const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_CONTACTS:
      return { ...state };
    case actionTypes.DELETE_CONTACT:
      return [...state.filter((contact) => contact.userId !== action.payload)];

    default:
      return state;
  }
};
export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case actionTypes.USER:
      return { ...state };

    default:
      return state;
  }
};

export const messagesReducer = (state = initialState.messages, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_MESSAGES:
      return { ...state };
    case actionTypes.SEND_MESSAGE:
      const { message, userId, activeUserId } = action.payload;
      const userExists = state[userId];
      if (!userExists) {
        return {
          ...state,
          [userId]: {
            is_user_msg: userId === activeUserId ? true : false,
            userId: userId,
            text: message,
          },
        };
      } else {
        return {
          ...state,
          [userId]: [
            ...state[userId],
            {
              is_user_msg: userId === activeUserId ? true : false,
              userId: userId,
              text: message,
            },
          ],
        };
      }

    default:
      return state;
  }
};

export const typingReducer = (state = initialState.typing, action) => {
  switch (action.type) {
    case actionTypes.TYPING:
      return action.payload;
    case actionTypes.SEND_MESSAGE:
      return "";

    default:
      return state;
  }
};
export const activeUserIdReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.ACTIVE_USER_ID:
      return action.payload;

    default:
      return state;
  }
};
