import { AppRegistry } from 'react-native';
import PhoneFrame from './src/PhoneFrame';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => PhoneFrame);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
