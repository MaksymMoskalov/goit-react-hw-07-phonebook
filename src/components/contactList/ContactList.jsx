export const ContactList = ({ contacts, onDelit }) => {
  return (
    <ul>
      {contacts !== null &&
        contacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <span>{name}</span>: <b>{phone}</b>{' '}
              <button type="button" onClick={() => onDelit(id)}>
                Remove
              </button>
            </li>
          );
        })}
    </ul>
  );
};
