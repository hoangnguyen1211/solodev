import { createStackNavigator } from 'react-navigation';
import { LearnScreen } from '../../screens';
import { CourseScreen, LessonScreen } from '../../screens/learning';
import { VocabularyScreen } from '../../screens/english';

const LearnStack = createStackNavigator({
    LearnScreen,
    CourseScreen,
    LessonScreen,
    VocabularyScreen
});

export default LearnStack;