import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

const ContactList = ({ queryList, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {queryList.map(({ id, name, number }) => (
        <div className={s.contactWrap} key={id}>
          <li className={s.contact}>
            {name}:<span className={s.contactNumber}>{number}</span>
          </li>
          <button
            className={s.btnDelete}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  queryList: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
};
export default ContactList;
