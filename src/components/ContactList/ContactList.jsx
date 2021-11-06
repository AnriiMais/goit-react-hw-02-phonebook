import PropTypes from 'prop-types';

const ContactList = ({ queryList, onDeleteContact }) => {
  return (
    <ul>
      {queryList.map(({ id, name, number }) => (
        <div key={id}>
          <li>
            {name}:<span>{number}</span>
          </li>
          <button type="button" onClick={() => onDeleteContact(id)}>
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
