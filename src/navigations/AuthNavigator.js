import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SignInScreen, GetCodeScreen, ConfirmScreen, ForgotPasswordScreen,
    SignUpScreen, JobScreen , ExperienceScreen, ChangePasswordScreen} from '../screens/authentication';

const AuthNavigator = createSwitchNavigator({
    SignInScreen,
    GetCodeScreen,
    ConfirmScreen,
    SignUpScreen,
    JobScreen,
    ExperienceScreen,
    ForgotPasswordScreen,
    ChangePasswordScreen
});

export default createAppContainer(AuthNavigator);