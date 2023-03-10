import Button from '../../button/button';
import { tabsItems } from '../../../constants';
import './tabs.css';
import { PropTypes } from 'prop-types';

export default function Tabs(props) {
  const { selectedTab, changeTab } = props;
  const tabsItemsEntries = Object.entries(tabsItems);
  function handleClick(event) {
    tabsItemsEntries.forEach((i) => {
      if (i[1] === event.target.innerHTML) {
        changeTab(i[0]);
      }
    });
  }
  return (
    <div className="tabs_container">
      <span>Show: </span>
      {tabsItemsEntries.map((i, index) => {
        let decoration = ' tab';
        if (i[0] === selectedTab) {
          decoration = ' selected_tab';
        }
        return (
          <Button decoration={decoration} key={index} handleClick={handleClick}>
            {i[1]}
          </Button>
        );
      })}
    </div>
  );
}

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  changeTab: PropTypes.func,
};
