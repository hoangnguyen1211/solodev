import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { 
    QuestionScreen,
    SingleAnswerScreen , 
    MultiAnswerScreen,
    DragSortAnswerScreen
} from '../screens/learning';

const QuestionSwitch = createSwitchNavigator({
    QuestionScreen,
    SingleAnswerScreen,
    MultiAnswerScreen,
    DragSortAnswerScreen
});

export default createAppContainer(QuestionSwitch);