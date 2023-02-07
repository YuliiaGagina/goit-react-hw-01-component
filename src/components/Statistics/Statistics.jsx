import PropTypes from 'prop-types';


import { SectionWrap, Title, List, Item } from './Statistics.styled';



const Statistics = props => {
  return (
    <SectionWrap>
     {props.title &&  <Title>{props.tittle}</Title> }
      <List>
        {props.stats.map(state => (
          <Item  key={state.id}>
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
