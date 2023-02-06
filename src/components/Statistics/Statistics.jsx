
import PropTypes from 'prop-types'; 
import css from './Statistics.module.css';
import randomColor from "randomcolor";



let color = randomColor();

const Statistics = (props) =>{

    return (
  <section  className={css.statistics}>
   
  <h2 className={css.title}>{props.tittle ? props.tittle: null }</h2>
  <ul className={css.statList}>
       {props.stats.map(state =>
         <li id={'elem'} style={{backgroundColor: color}} key={state.id} className={css.item}>
           <span className={css.label}>{state.label}</span>
            <span className={css.percentage}>{state.percentage}%</span>
          </li>
       )}
       
  </ul>
</section>
    );
}

Statistics.propTypes = {
props: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,

}))

}


export default Statistics;