import './index.css'

const TabItem = props => {
  const {details, isTabSelected, selectTab} = props
  const {tabId, displayText} = details

  const selectedTabClass = isTabSelected ? `selected-tab` : ``

  const changeTab = () => {
    selectTab(tabId)
  }
  return (
    <li className="tabs-cont">
      <button
        type="button"
        onClick={changeTab}
        className={`tab-head ${selectedTabClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
