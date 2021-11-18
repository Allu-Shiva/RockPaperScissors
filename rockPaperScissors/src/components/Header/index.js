import {
  HeaderContainer,
  FlexContainer,
  Name,
  ScoreContainer,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <FlexContainer>
        <Name>ROCK</Name>
        <Name>PAPER</Name>
        <Name>SCISSORS</Name>
      </FlexContainer>
      <ScoreContainer>
        <Name score>Score</Name>
        <Name value>{score}</Name>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
