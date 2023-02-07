import PropTypes from 'prop-types';

import randomColor from 'randomcolor';
import { SectionWrap, Title, List, Item } from './Statistics.styled';

let color = randomColor();

const Statistics = props => {
  return (
    <SectionWrap>
      <Title>{props.tittle ? props.tittle : null}</Title>
      <List>
        {props.stats.map(state => (
          <Item style={{ backgroundColor: color }} key={state.id}>
            <span>{state.label}</span>
            <span>{state.percentage}%</span>
          </Item>
        ))}
      </List>
    </SectionWrap>
  );
};

Statistics.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
