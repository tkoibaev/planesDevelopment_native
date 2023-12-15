import styled from "styled-components/native"

const ItemView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #33cccc;
  border-bottom-style: solid;
`

const ItemImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`

const ItemTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`

const ItemDetails = styled.View`
  flex: 1;
  justify-content: center;
`

const ItemCategory = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`
const ItemPrice = styled.Text`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 700;
`

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "..."
  }

  return str
}

// date-fns => format

export const Item = ({ title, image, category, price }) => {
  return (
    <ItemView>
      <ItemImage source={{ uri: image }} />
      <ItemDetails>
        <ItemTitle>{truncateTitle(title)}</ItemTitle>
        <ItemCategory>{category}</ItemCategory>
      </ItemDetails>
      <ItemPrice>{price} $</ItemPrice>
    </ItemView>
  )
}
