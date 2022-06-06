import styled from 'styled-components'

const Item = styled.li``

export const ListItem = (props) => {
  return (
    <Item>
      <input type="checkbox" />
      {props.children}
    </Item>
  )
}
