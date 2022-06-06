import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { itemAdded } from './listSlice'

import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
`

const AddNew = () => {
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const handleNameChanged = (e) => setName(e.target.value)

  const handleItemSubmitted = (e) => {
    e.preventDefault()
    if (!name) return

    dispatch(
      itemAdded({
        id: nanoid(),
        name,
        checked: false,
      })
    )

    setName('')
  }

  return (
    <li>
      <form onSubmit={handleItemSubmitted}>
        <input
          placeholder="add new item..."
          value={name}
          onChange={handleNameChanged}
        />
      </form>
    </li>
  )
}

export const ItemsList = () => {
  const list = useSelector((state) => state.list)

  const renderedList = list.map((item) => (
    <li key={item.id}>
      <input type="checkbox" defaultChecked={item.checked} />
      {item.name}
    </li>
  ))

  return (
    <List>
      {renderedList}
      <AddNew />
    </List>
  )
}
