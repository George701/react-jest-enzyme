import Contact from './Contact'
import { shallow } from './enzyme'

describe('Contact', () => {
  const mockRemove = jest.fn()
  const id = 1
  const props = {contact: {id}, mockRemove}
  const contact = shallow(<Contact {...props}/>)

  it('renders properly', () => {
    expect(contact).toMatchSnapshot();
  })

  it('initializes a name, phone and email in `state`', () => {
    expect(contact.state()).toEqual({name: '', phone: '', email: ''});
  });

  describe('when typing in name input', () => {
    const name = 'John Doe';

    beforeEach(()=>{
      contact.find('#input-name').simulate('change', { target: { value: name } });
    });

    it('updates a name in `state`', () => {
        expect(contact.state().name).toEqual(name);
    });
  });

  describe('when typing into the phone input', () => {
    const phone = '+79215556782';

    beforeEach(() => {
      contact.find('#input-phone').simulate('change', { target: { value: phone } })
    });

    it('updates the phone in `state', () => {
        expect(contact.state().phone).toEqual(phone);
    });
  });

  describe('when typing into the email input', () => {
    const email = 'john.doe@gmail.com';

    beforeEach(() => {
      contact.find('#input-email').simulate('change', { target: { value: email } })
    });

    it('updates the email in `state', () => {
        expect(contact.state().email).toEqual(email);
    });
  });
})