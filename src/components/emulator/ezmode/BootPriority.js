import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import logo from "../../../resources/hdd128.png"
const getItems = list =>
    Array.from({ length: list.length }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `${list[k].system_name}`,
        unic_id: `${list[k].id}`
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 35;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    alignContent: "center",
    width: '200px',
    height: '200px',
    margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = isDraggingOver => ({

    background: isDraggingOver ? 'lightblue' : '#404040',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
});

class BootPriority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: getItems(this.props.listHdd),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );
        this.setState({
            items,
        });
        let array_items = Object.values(this.state.items)
        let str_priority = "";
        for (let i = 0; i < array_items.length; i++) {
            if (i === array_items.length - 1) {
                str_priority += array_items[i].id + "|" + array_items[i].unic_id
            } else {
                str_priority += array_items[i].id + "|" + array_items[i].unic_id + "#"
            }
        }
        this.props.setBootPriority(str_priority);
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <div className='back_emul'>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <h5 className='text-muted'>Boot priority pannel</h5>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}
                        >
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        >
                                           <div className="text-center">
                                               <br/>
                                               <img src={logo} alt={require('../../../resources/hdd128.png')}/>
                                               {item.content}
                                           </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <h5 className='text-muted'>Use mouse to drag element</h5>
            </DragDropContext>
            </div>
        );
    }
}

export default BootPriority