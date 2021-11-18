import {Component} from 'react'
import {
  BgContainer,
  UnorderedList,
  CustomButton,
  Thumbnail,
  MainHeading,
} from './styledComponents'
import Header from '../Header'
import GameResultView from '../GameResultView'
import RulesPopup from '../RulesPopup'

class Home extends Component {
  state = {
    score: 0,
    userChoice: '',
    opponentChoice: '',
    isResult: false,
    userUrl: '',
    opponentUrl: '',
    status: '',
  }

  componentDidMount() {
    this.randomChoice()
  }

  randomChoice = () => {
    const {choicesList} = this.props
    const randChoice = choicesList[Math.floor(Math.random() * 3)].id
    this.setState({opponentChoice: randChoice})
  }

  onChoose = event => {
    const tool = event.target.alt
    this.setState({userChoice: tool, isResult: true}, this.renderResultView)
  }

  renderGameView = () => {
    const {choicesList} = this.props
    return (
      <UnorderedList>
        {choicesList.map(eachItem => (
          <li key={eachItem.id}>
            <CustomButton
              type="button"
              data-testid={`${eachItem.id.toLowerCase()}Button`}
              onClick={this.onChoose}
            >
              <Thumbnail src={eachItem.imageUrl} alt={eachItem.id} />
            </CustomButton>
          </li>
        ))}
      </UnorderedList>
    )
  }

  renderResultView = () => {
    const {userChoice, opponentChoice, score} = this.state
    const {choicesList} = this.props
    let status
    let updatedScore
    if (userChoice === opponentChoice) {
      status = 'IT IS DRAW'
      updatedScore = score
    } else if (
      (userChoice === 'PAPER' && opponentChoice === 'ROCK') ||
      (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (userChoice === 'ROCK' && opponentChoice === 'SCISSORS')
    ) {
      status = 'YOU WON'
      updatedScore = score + 1
    } else {
      status = 'YOU LOSE'
      updatedScore = score - 1
    }
    const user = choicesList.filter(eachItem => {
      if (eachItem.id === userChoice) {
        return eachItem
      }
      return false
    })
    const opponent = choicesList.filter(eachItem => {
      if (eachItem.id === opponentChoice) {
        return eachItem
      }
      return false
    })
    this.setState({
      score: updatedScore,
      userUrl: user[0].imageUrl,
      opponentUrl: opponent[0].imageUrl,
      status,
    })
  }

  onTryAgain = () => this.setState({isResult: false}, this.randomChoice)

  render() {
    const {score, isResult, userUrl, opponentUrl, status} = this.state
    return (
      <BgContainer>
        <MainHeading>Rock Paper Scissors</MainHeading>
        <Header score={score} />
        {isResult ? (
          <GameResultView
            userUrl={userUrl}
            opponentUrl={opponentUrl}
            status={status}
            onTryAgain={this.onTryAgain}
          />
        ) : (
          this.renderGameView()
        )}
        <RulesPopup />
      </BgContainer>
    )
  }
}
export default Home
