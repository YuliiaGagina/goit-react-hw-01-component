import PropTypes from 'prop-types'; 
import css from './FriendList.module.css';


const  FriendList = ({friends}) =>{
  
  return(  <ul  className={css.friendList}>
    { friends.map(({avatar, name, isOnline, id}) =>
    
        <li key={id} className={css.item}>
         <span className={css[isOnline]}>{isOnline}</span>
         <img className={css.avatar} src={avatar} alt={name} width="48" />
         <p className={css.name}>{name}</p>
       </li>
     )}

</ul>)
   
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    
    }))
}

export default FriendList;


// PropTypes.exact({
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.bool,
//     id: PropTypes.number,

// })