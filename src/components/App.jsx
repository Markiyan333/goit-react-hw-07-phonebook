import { ContactForm } from './ContactForm/ContactForm';
import { ContactsView } from './ContactsView/ContactsView';
import { Filter } from './Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsView />
    </div>
  );
};
export default App;
