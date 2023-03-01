import React, { createElement } from 'react'

const Renderer = ({ elements }) => {
    const renderElement = (props) => {
        return createElement(props.type, { 
          id: props.id, 
          key: props.key, ...props.props }, 
          Array.isArray(props.children) ? 
            props.children.map((child, i) => {
              return(
                renderElement({
                  type: child.type, 
                  id: child.id,
                  key: i, 
                  props: child.props, 
                  children: child.children
                })
              )
            })
          : props.children
        )
     }
     
    return(
      <div className="flex flex-col w-1/2 h-full bg-white">
        { elements ?
          elements.map((element, i) => {
            return (
              renderElement({
                  type: element.type,  
                  id: element.id,
                  key: i, 
                  props: element.props, 
                  children: element.children 
              })
            )})
          : null
        }
      </div>
    )
  }

  export default Renderer