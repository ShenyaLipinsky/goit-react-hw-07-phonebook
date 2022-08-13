import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, removeContact } from 'redux/contactsSlice';
import { Box } from '../Box';
import { ContactListItem } from './ContactsItem';

export const Contacts = () => {
  let contacts = useSelector(getContacts);
  let filter = useSelector(getFilter);

  const filterItems = (arr, query) => {
    if (arr.length !== 0 || null) {
      let newArray = arr.filter(
        el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      return newArray;
    }
    return;
  };
  const dispatch = useDispatch();

  return (
    <Box as="ul" mt={4} width="100%">
      {filterItems(contacts, filter).map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={() => {
              dispatch(removeContact(id));
            }}
          />
        );
      })}
    </Box>
  );
};
