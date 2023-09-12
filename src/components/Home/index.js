// Write your JS code here
import {FaCheck} from 'react-icons/fa'
import {Component} from 'react'
import Header from '../Header'
import TabItem from '../TabItem'

import './index.css'

const tabsList = [
  {tabId: 'BASIC', displayText: 'Basic'},
  {tabId: 'SHOPIFY', displayText: 'Shopify'},
  {tabId: 'ADVANCED', displayText: 'Advanced'},
]

class Home extends Component {
  state = {activeTab: tabsList[0].tabId}

  selectTab = tabId => {
    this.setState({activeTab: tabId})
  }

  basicCard = () => (
    <div className="basic-card">
      <h1 className="amount-head">
        Rs 1,994
        <sub>
          INR<sub>/mon</sub>
        </sub>
      </h1>
      <div className="discount-20">
        Get your firs 3 months Rs 20<sub>/mon</sub>
      </div>
      <h1 className="features-head">Whats includes on Basic</h1>
      <ul className="more-features">
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">Basic reports</p>
        </li>
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">Upto 1000 inventory locations</p>
        </li>
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">2 staff accounts</p>
        </li>
      </ul>
      <div className="button-center">
        <button type="button" className="try-for-free">
          Try for Free
        </button>
      </div>
    </div>
  )

  shopifyCard = () => (
    <div className="basic-card">
      <h1 className="amount-head">
        Rs 7,447
        <sub>
          INR<sub>/mon</sub>
        </sub>
      </h1>
      <div className="discount-20">
        Get your firs 3 months Rs 20<sub>/mon</sub>
      </div>
      <h1 className="features-head">Whats includes on Basic</h1>
      <ul className="more-features">
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">Professional Reports</p>
        </li>
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">Upto 1000 inventory locations</p>
        </li>
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">5 staff accounts</p>
        </li>
      </ul>
      <div className="button-center">
        <button type="button" className="try-for-free">
          Try for Free
        </button>
      </div>
    </div>
  )

  advacedCard = () => (
    <div className="basic-card">
      <h1 className="amount-head">
        Rs 30,164
        <sub>
          INR<sub>/mon</sub>
        </sub>
      </h1>
      <div className="discount-20">
        Get your firs 3 months Rs 20<sub>/mon</sub>
      </div>
      <h1 className="features-head">Whats includes on Basic</h1>
      <ul className="more-features">
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">Custom report Builder</p>
        </li>
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">Upto 1000 inventory locations</p>
        </li>
        <li className="features-list-item">
          <FaCheck className="tick" />
          <p className="features-para">15 staff accounts</p>
        </li>
      </ul>
      <div className="button-center">
        <button type="button" className="try-for-free">
          Try for Free
        </button>
      </div>
    </div>
  )

  renderCard = () => {
    const {activeTab} = this.state

    switch (activeTab) {
      case 'BASIC':
        return this.basicCard()
      case 'SHOPIFY':
        return this.shopifyCard()
      case 'ADVANCED':
        return this.advacedCard()
      default:
        return null
    }
  }

  renderDesktopCard = () => (
    <div className="desktop-cards-cont">
      <ul className="payment-cont">
        <li className="pay-monthly">Pay Monthly</li>
        <li className="pay-yearly"> Pay Yearly (save 25%)</li>
      </ul>
      <div className="desktop-inner-cards-cont">
        <div className="desk-basic-card">
          <h1 className="amount-head">
            Rs 1,994
            <sub>
              INR<sub>/mon</sub>
            </sub>
          </h1>
          <div className="discount-20">
            Get your firs 3 months Rs 20<sub>/mon</sub>
          </div>
          <h1 className="features-head">Whats includes on Basic</h1>
          <ul className="more-features">
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">Basic reports</p>
            </li>
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">Upto 1000 inventory locations</p>
            </li>
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">2 staff accounts</p>
            </li>
          </ul>
          <div className="button-center">
            <button type="button" className="desk-try-for-free">
              Try for Free
            </button>
          </div>
        </div>
        <div className="desk-basic-card">
          <h1 className="amount-head">
            Rs 7,447
            <sub>
              INR<sub>/mon</sub>
            </sub>
          </h1>
          <div className="discount-20">
            Get your firs 3 months Rs 20<sub>/mon</sub>
          </div>
          <h1 className="features-head">Whats includes on Basic</h1>
          <ul className="more-features">
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">Professional Reports</p>
            </li>
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">Upto 1000 inventory locations</p>
            </li>
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">5 staff accounts</p>
            </li>
          </ul>
          <div className="button-center">
            <button type="button" className="desk-try-for-free">
              Try for Free
            </button>
          </div>
        </div>
        <div className="desk-basic-card">
          <h1 className="amount-head">
            Rs 30,164
            <sub>
              INR<sub>/mon</sub>
            </sub>
          </h1>
          <div className="discount-20">
            Get your firs 3 months Rs 20<sub>/mon</sub>
          </div>
          <h1 className="features-head">Whats includes on Basic</h1>
          <ul className="more-features">
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">Custom report Builder</p>
            </li>
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">Upto 1000 inventory locations</p>
            </li>
            <li className="features-list-item">
              <FaCheck className="tick" />
              <p className="features-para">15 staff accounts</p>
            </li>
          </ul>
          <div className="button-center">
            <button type="button" className="desk-try-for-free">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  render() {
    const {activeTab} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          <ul className="tabs-cont">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                details={eachTab}
                selectTab={this.selectTab}
                isTabSelected={eachTab.tabId === activeTab}
              />
            ))}
          </ul>
          <div className="mobile-cards">{this.renderCard()}</div>

          <div className="desktop-cards">{this.renderDesktopCard()}</div>
        </div>
      </>
    )
  }
}

export default Home
