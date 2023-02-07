import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


const TransactionHistory = ({items}) =>{
   
   return(<section className={css.transWrapper}>
    <table className={css.transactionHistory}>
   <thead>
     <tr>
       <th className={css.thead}>Type</th>
       <th className={css.thead}>Amount</th>
       <th className={css.thead}>Currency</th>
     </tr>
   </thead>
    {items.map(({id, type, amount, currency}) =>
        <tbody key={id} className={css.eachline}>
        <tr>
          <td className={css.tbody} >{type}</td>
          <td className={css.tbody} >{amount}</td>
          <td className={css.tbody} >{currency}</td>
        </tr>
       </tbody>
   
    )}
   </table>
   </section>
   ) 
};

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf( 
    PropTypes.exact({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    }),
   )
}


export default TransactionHistory;