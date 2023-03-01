import React, { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { HiViewGridAdd } from "react-icons/hi";
import {
  MdAddCircle,
  MdOutlineMap,
  MdOutlineList,
  MdOutlineTableView,
  MdOutlineImage,
  MdOutlineVideoLibrary,
  MdOutlineDragHandle,
  MdDeleteForever
} from "react-icons/md";
import {
  FaHeading,
  FaParagraph
} from 'react-icons/fa'
// import { elementState } from "../../../atoms";
import { atom, selector, get, useRecoilState, useRecoilValue } from "recoil";
import update from 'immutability-helper';


const ComponentBar = ({ id, functions, dragHandle }) => {

  //const [ elements, setElements ] = useRecoilState(elementState)

  const container = { type: 'div', props: { className: 'adz-container' }, children: [] }

  // RECOIL PLAYGROUND


  const elementsState = atom({
    key: "elementsState",
    default: [
      {
        id: 'Div-1',
        type: 'div',
        props: { className: 'adz-div'},
        children: [
          {
            id: 'Div-1-Ul-1',
            type: 'ul',
            props: { className: 'adz-list'},
            children: [
              {
                id: 'Div-1-Ul-1-Li-1',
                type: 'li',
                props: { className: 'adz-list-item'},
                children: 'Div 1, Ul 1, Li 1'
              },
              {
                id: 'Div-1-Ul-1-Li-2',
                type: 'li',
                props: { className: 'adz-list-item'},
                children: 'Div 1, Ul 1, Li 2'
              },
            ]
          },
          {
            id: 'Ul-2',
            type: 'ul',
            props: { className: 'adz-list'},
            children: []
          },
        ]
      }
    ]
  })


  const elements = useRecoilValue(elementsState)
  console.log(elements)
  // END RECOIL PLAYGROUND

  const addElement = async () => {
    console.log('Test')
    //const findIndexById = (arr, id) => {
    //  const i = arr.findIndex(x => x.id === id)
    //  return i
    //}
    //const i = await findIndexById(elements, id)
    //setElements(update(elements, {
    //  [i]: { children: { $push: [container] } }
    //}));
  }

  const deleteElement = async () => {
    console.log('test')
    //const findIndexById = (arr, id) => {
    //  const i = arr.findIndex(x => x.id === id)
    //  return i
    //}
    //const index = await findIndexById(elements, id)
    //setElements(update(elements, {
    //  $splice: [[index, 1 ]]
    //}));
  }

  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "50px",
        marginTop: "5px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          opacity: `${hovered === true ? 1 : 0.1 }`,
          display: 'flex',
          position: "absolute",
          width: "100%",
          top: 0,
          left: 0,
          flexDirection: "row",
          alignItems: "center",
          background: "#",
        }}
      >
        <HiViewGridAdd
          onClick={() => console.log('add div')}
          className="componentBarItem"
        />
        <MdOutlineImage
          className="componentBarItem"
        />
        <MdOutlineVideoLibrary
          className="componentBarItem"
        />
        <MdOutlineList
          className="componentBarItem"
        />
        <MdOutlineTableView
          className="componentBarItem"
        />
        <MdOutlineMap  className="componentBarItem" />
        <MdDeleteForever onClick={() => deleteElement() } className="componentBarItem deleteSection" />
        {dragHandle}
      </div>
    </div>
  );
};

const Section = ({ id, children, moveElement, index }) => {

  const ItemTypes = {
    SECTION: 'section',
  }

  const handleRef = useRef(null)
  const itemRef = useRef(null)

  const [{ handlerId }, drop ] = useDrop({
    accept: ItemTypes.SECTION,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item) {
      //if(!ref.current) {
      //  return
      //}
      const dragIndex = item.index
      const hoverIndex = index
      if(dragIndex === hoverIndex) {
        return
      }
      moveElement(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })

  const [{ isDragging }, drag, preview ] = useDrag({
    type: ItemTypes.SECTION,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.4 : 1

  drag(handleRef)
  drop(preview(itemRef))
 
  return (
    <div
      ref={itemRef}
      data-handler-id={handlerId}
      className="sectionWrapper"
      id={id}
      style={{
        position: "relative",
        minWidth: "100%",
        minHeight: "200px",
        marginLeft: "-1px",
        borderRadius: "3px",
        margin: "2px 0px",
        opacity
      }}
    >
      <ComponentBar id={id} dragHandle={<div ref={handleRef}><MdOutlineDragHandle className="componentBarItem moveHandle"/></div>}/>
      {children === undefined ? (
        <span
          className="sectionComponentAddButton"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "transparent",
            border: "none",
            color: "#000",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          Select a component to add from the menu bar. Read docs.
        </span>
      ) : (
        children
      )}
    </div>
  )
}

export default Section