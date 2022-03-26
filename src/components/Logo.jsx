import logo from '../logo.svg';
import Text from './Text'

function Logo() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Text />
        </div>
  );
}

export default Logo;