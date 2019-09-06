import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { QuestionScreen, ExerciseScreen } from '../screens/learning';

const QuestionSwitch = createSwitchNavigator({
    QuestionScreen,
    ExerciseScreen
});

export default createAppContainer(QuestionSwitch);