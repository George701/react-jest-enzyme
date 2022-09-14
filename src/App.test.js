import App, { max_number } from './App'
import { shallow } from './enzyme'

describe('max_number', () => {
    describe('while given an empty array', () => {
        it('returns 0', () => {
            expect(max_number([0])).toEqual(0);
        });
    });

    describe('while given an array of numbers', () => {
        it('returns the max number', () => {
            expect(max_number([1,2,3])).toEqual(3);
        });
    });
});

describe('App', () => {
  const app = shallow(<App/>);
  
  // console.log(app.debug())

  it('renders correctly', ()=>{
      expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of contacts', ()=>{
    expect(app.state().contacts).toEqual([]);
  });

  describe('when clicking the `add-contact` button', () => {
    const id = 1;

    beforeEach(()=>{
        app.find('.btn-add').simulate('click');
    });

    afterEach(()=>{
        app.setState({contacts: []});
    });

    it('adds a new contact to `state`', () => {
        expect(app.state().contacts).toEqual([{id}]);
    });

    it('adds new contact to the rendered list', () => {
      expect(app.find('.contact-list').children().length).toEqual(1);
    });

    it('creates a Contact component', () => {
      expect(app.find('Contact').exists()).toBe(true);
    });

    describe('while user wants to remove the added contact', () => {
      beforeEach(() => {
        app.instance().removeContact(id);
      });

      it('removes the contact from `state`', () => {
        expect(app.state().contacts).toEqual([]);
      });
  });
  });
});
