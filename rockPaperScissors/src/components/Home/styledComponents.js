import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
`

export const UnorderedList = styled.ul`
  list-style: none;
  padding-left: 0px;
  width: ${props => (props.result ? '500px' : '30%')};
  display: flex;
  align-items: center;
  justify-content: ${props => (props.result ? 'space-between' : 'center')};
  flex-wrap: wrap;
`

export const CustomButton = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
`
export const Thumbnail = styled.img`
  width: 150px;
`
export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
