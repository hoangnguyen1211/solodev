import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LEARN_STACK, HOME_STACK, SETTING_STACK } from '../constants/ScreenConstants';
import { LearnStack, HomeStack, SettingStack } from './stacks';
import { TextI18n } from '../components/language';

const AppNavigator = createBottomTabNavigator({
    LearnStack,
    HomeStack,
    SettingStack
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            return ({
                // Gọi hàm để lấy tên tabbar
                tabBarLabel: ({ focused, horizontal, tintColor }) => {
                    switch (routeName) {
                        case LEARN_STACK:
                            return <Text style={[styles.tabLabel, { color: tintColor }]}>
                                <TextI18n langKey={'learn-tab'} />
                            </Text>
                        case HOME_STACK:
                            return <Text style={[styles.tabLabel, { color: tintColor }]}>
                                <TextI18n langKey={'home-tab'} />
                            </Text>
                        case SETTING_STACK:
                            return <Text style={[styles.tabLabel, { color: tintColor }]}>
                                <TextI18n langKey={'setting-tab'} />
                            </Text>
                        default:
                            break;
                    }
                },
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    switch (routeName) {
                        case HOME_STACK:
                            return <Ionicons name='ios-home' size={22} color={tintColor} />
                        case LEARN_STACK:
                            return <Ionicons name='ios-school' size={22} color={tintColor} />
                        case SETTING_STACK:
                            return <Ionicons name='ios-construct' size={22} color={tintColor} />
                        default:
                            break;
                    }
                }
            })
        },
        tabBarOptions: {
            activeTintColor: '#daa520',
            inactiveTintColor: 'gray'
        }
    });


const styles = StyleSheet.create({
    tabLabel: {
        fontSize: 12
    }
})

export default createAppContainer(AppNavigator);