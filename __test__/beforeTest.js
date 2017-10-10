import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-ga');
jest.mock('next/dynamic');
Enzyme.configure({ adapter: new Adapter() });
