import PropTypes from 'prop-types'; 
import css from './Profile.module.css'



const Profile = ({user}) => {
    const {avatar, username, tag, location, stats} = user
    return (<div key={tag} className={css.profile}>
    <div  className={css.description}>
      <img width={100}
        src={avatar}
        alt={avatar}
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.stat} >
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.stat}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>);
}

Profile.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats :  PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
    
          }),

    })
   
}



export default Profile;