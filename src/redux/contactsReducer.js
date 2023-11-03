const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContacts(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    handlFiltration(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContacts, handlFiltration } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
