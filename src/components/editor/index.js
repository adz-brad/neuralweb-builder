import React, { useCallback } from "react";
import update from 'immutability-helper';
import Menu from "./components/Menu";
import Editor from "./components/editor";
import Renderer from './components/renderer'
import { elementState } from '../../atoms'
import { useRecoilState } from 'recoil'

const EditorInterface = () => {

  const [ elements, setElements ] = useRecoilState(elementState);

  const section = {type: 'div', props: { className: 'adz-section' }, children: [
       //{
       //  type: 'ul',
       //  props : { className: 'adz-list' },
       //  children: [
       //    {
       //      type: 'li',
       //      props: { className: 'adz-list-item' },
       //      children: 'List Item 1'
       //    },
       //    {
       //      type: 'li',
       //      props: { className: 'adz-list-item' },
       //      children: 'List Item 2'
       //    }
       //  ]
       //}
    ]
  }

  const addElement = (props) => {
    const id = Math.floor(Math.random()*899999+100000)
    const element = {
      id: id,
      type: props.type,
      props: props.props,
      children: props.children
    } 
    setElements(elements.concat(element));
  };

  const moveElement = useCallback((dragIndex, hoverIndex) => {
    setElements((elements) =>
      update(elements, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, elements[dragIndex]],
        ],
      }),
   )
  }, [ setElements ])

  return (
    <>
      <div className="editorInterfaceWrapper">
          <Menu functions={{addElement: () => addElement(section)}}/>
          <div className="flex flex-row h-full divide-x-4">
              <Editor elements={elements} moveElement={moveElement} />
              <Renderer elements={elements} />
          </div>

      </div>
    </>
  )
};

export { EditorInterface }
