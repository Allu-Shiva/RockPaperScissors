import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  display: flex;
  justify-content: space-between;
  font-family: 'Bree Serif';
  color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  width: 60%;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.result ? 'center' : 'flex-start')};
  justify-content: center;
  padding-left: 10px;
`
export const Name = styled.p`
  font-weight: ${props => (props.score ? 'normal' : 'bold')};
  margin: 0px;
  color: ${props => (props.score || props.value ? '#223a5f' : '#ffffff')};
  font-size: ${props => (props.value ? '26px' : 'normal')};
  font-family: ${props => (props.value ? 'Roboto' : 'Bree Serif')};
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 10px;
  padding-right: 10px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
