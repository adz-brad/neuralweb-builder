import React, { useCallback } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Section from './section'
import { atom, useRecoilValue } from "recoil";

const Editor = ({ elements: elementsProp, moveElement }) => {

    const renderElement = useCallback((element, i) => {
        return (
            <Section 
                id={element.id} 
                key={element.id} 
                index={i} 
                functions={element.functions} 
                moveElement={moveElement}
            />
        )
    })

    // RECOIL PLAYGROUND

    const elementsTestState = atom({
        key: "elementsTestState",
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
    
    
      let elements = useRecoilValue(elementsTestState)
      let elementsString = JSON.stringify(elements, null, 2)

      // END RECOIL PLAYGROUND

    return (
        <DndProvider backend={HTML5Backend}>
            <div 
                id="visualEditor" 
                className="w-1/2 bg-white flex flex-col"

            >    
                {/*{elements ?
                    elements.map((element, i) => renderElement(element, i))
                : null }*/}
                {elements ?
                    <pre>{elementsString}</pre>
                : null}
            
            </div>
        </DndProvider>
    )
  }

  export default Editor