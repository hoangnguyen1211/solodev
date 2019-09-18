import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { 
    QuestionScreen,
    SingleAnswerScreen , 
    MultiAnswerScreen,
    DragSortAnswerScreen,
    EnterAnswerScreen
} from '../screens/learning';

const QuestionSwitch = createSwitchNavigator({
    QuestionScreen,
    SingleAnswerScreen,
    MultiAnswerScreen,
    DragSortAnswerScreen,
    EnterAnswerScreen
});

export default createAppContainer(QuestionSwitch);