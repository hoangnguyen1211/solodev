import { createSwitchNavigator } from 'react-navigation';
import { SplashScreen, LanguageScreen } from '../screens';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import QuestionNavigator from './QuestionNavagator';

const InitialNavigator = createSwitchNavigator({
    SplashScreen,
    LanguageScreen,
    AuthNavigator,
    AppNavigator,
    QuestionNavigator
});

export default InitialNavigator;