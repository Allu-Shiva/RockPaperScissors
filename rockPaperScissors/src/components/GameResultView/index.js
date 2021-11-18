import {ResultContainer, Text, TryAgainButton} from './styledComponents'
import {FlexContainer} from '../Header/styledComponents'
import {Thumbnail, UnorderedList} from '../Home/styledComponents'

const GameResultView = props => {
  const {userUrl, opponentUrl, status, onTryAgain} = props
  const TryAgain = () => onTryAgain()

  return (
    <ResultContainer>
      <UnorderedList result>
        <FlexContainer result>
          <Text>YOU</Text>
          <Thumbnail src={userUrl} alt="your choice" />
        </FlexContainer>
        <FlexContainer result>
          <Text>OPPONENT</Text>
          <Thumbnail src={opponentUrl} alt="opponent choice" />
        </FlexContainer>
      </UnorderedList>
      <FlexContainer result>
        <Text>{status}</Text>
        <TryAgainButton type="button" onClick={TryAgain}>
          PLAY AGAIN
        </TryAgainButton>
      </FlexContainer>
    </ResultContainer>
  )
}

export default GameResultView
