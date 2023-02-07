import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import randomColor from 'randomcolor';
import { SectionWrap, Title, List, Item } from './Statistics.styled';

let color = randomColor()

const Statistics = props => {
  return (
    <SectionWrap>
      <Title>{props.tittle ? props.tittle : null}</Title>
      <List>
        {props.stats.map(state => (
          <Item style={{ backgroundColor: color }} key={state.id}>
            <span className={css.label}>{state.label}</span>
            <span className={css.percentage}>{state.percentage}%</span>
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
