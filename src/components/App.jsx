import { Box } from './Box';
import { ContactForm } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';

export const App = () => {
  let contacts = useSelector(getContacts);
  let filter = useSelector(getFilter);

  return (
    <Box
      mt={4}
      mx={'auto'}
      px={4}
      py={5}
      display={'flex'}
      flexDirection="column"
      alignItems="center"
      width={3}
      borderRadius={'large'}
      bg={'secondary'}
    >
      <h1>PhoneBook</h1>
      <ContactForm></ContactForm>
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter title="Find contacts by name" value={filter} />
          <Contacts />
        </>
      )}
    </Box>
  );
};
