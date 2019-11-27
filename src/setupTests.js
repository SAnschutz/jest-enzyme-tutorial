import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

//Create-react-app's jest configuration is looking for a file with this specific name (so if not create-react-app, have to set up configuration file for jest)

//Will run this before every test
