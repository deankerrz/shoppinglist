import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: 'Banana', checked: false },
  { id: 2, name: 'Kale', checked: false },
  { id: 3, name: 'Quinoa', checked: false },
  { id: 4, name: 'Toothpaste', checked: false },
]

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    itemAdded: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { itemAdded } = listSlice.actions

export const selectList = (state) => state.list

export default listSlice.reducer
