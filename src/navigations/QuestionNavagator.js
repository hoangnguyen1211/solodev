import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { 
    QuestionScreen, 
    ExerciseScreen, 
    SingleAnswerScreen , 
    MultiAnswerScreen
} from '../screens/learning';

const QuestionSwitch = createSwitchNavigator({
    QuestionScreen,
    ExerciseScreen,
    SingleAnswerScreen,
    MultiAnswerScreen
});

export default createAppContainer(QuestionSwitch);