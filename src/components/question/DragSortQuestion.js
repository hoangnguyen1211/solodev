import React, { Component, Fragment } from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { WHITE_COLOR, BLACK_COLOR, SKY_COLOR } from '../../constants/ColorConstants';
import { FONT_TEXT } from '../../constants/FontConstants';

class DragSortQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
            answers: []
        }
    }

    componentDidMount = () => {
        const { renderItems } = this.props;
        this.setState({
            answers: renderItems
        })
    }

    _checkAnswer = (data) => {
        const { funcHandler } = this.props;
        let status = true;
        for (let index = 0; index < data.length; index++) {
            if((index + 1) !== JSON.parse(data[index].orderIndex)){
                status = false;
                break;
            }
        }
        this.setState({ answers: data });
        funcHandler(status);
    }

    renderItem = ({ item, index, move, moveEnd, isActive }) => {
        const activeStyle = isActive ? {
            backgroundColor: SKY_COLOR,
            color: WHITE_COLOR
        } : {
            backgroundColor: WHITE_COLOR,
            color: BLACK_COLOR
        }
        return (
            <TouchableOpacity
                style={[styles.itemAnswer, activeStyle]}
                onLongPress={move}
                onPressOut={moveEnd}
            >
                <Text style={styles.itemLabel}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <Fragment>
                <DraggableFlatList
                    contentContainerStyle={{paddingHorizontal: 20}}
                    data={this.state.answers}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `draggable-item-${index}`}
                    scrollPercent={2}
                    onMoveEnd={({ data }) => this._checkAnswer(data)}
                />
            </Fragment>
        )
    }
}

export default DragSortQuestion;

const styles = StyleSheet.create({
    itemAnswer: {
        borderWidth: 1,
        borderColor: 'silver',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: WHITE_COLOR,
        color: BLACK_COLOR
    },
    itemLabel: {
        fontSize: FONT_TEXT,
        color: BLACK_COLOR,
        marginLeft: 10
    },
})