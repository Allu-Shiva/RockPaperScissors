import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const RulesPopup = () => (
  <Popup
    modal
    trigger={
      <button data-testid="rulesButton" type="button" className="rules-button">
        Rules
      </button>
    }
    className="popup-content"
  >
    {close => (
      <>
        <button
          type="button"
          data-testid="closeButton"
          className="close-button"
          onClick={() => close()}
        >
          <RiCloseLine />
        </button>

        <img
          className="rules-img"
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </>
    )}
  </Popup>
)

export default RulesPopup
