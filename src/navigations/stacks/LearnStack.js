import { createStackNavigator } from 'react-navigation';
import { LearnScreen } from '../../screens';
import { CourseScreen, LessonScreen } from '../../screens/learning';

const LearnStack = createStackNavigator({
    LearnScreen,
    CourseScreen,
    LessonScreen
});

export default LearnStack;