import React, { useState } from "react";
import Split from "react-split";
import { LiveProvider, LivePreview } from 'react-live'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
// import 'prism'

const EditorMenu = () => {
  return(
    <div className="editorMenu glass">

    </div>
  )
}

const EditorInterface = () => {

  const [ code, setCode ] = useState('')

  return (
    <div className="editorInterfaceWrapper">
      <div className="editorSubMenu glass">
      </div>
      <LiveProvider code={code}>
      <div className="editorInterface glass">
          <Split
            style={{ display: "flex", flexDirection: "row", height: '100%' }}
            gutterSize={6}
            sizes={[50, 50]}
          >
            <div id="builderContainer">
              <Split
              style={{ display: "flex", flexDirection: "column", height: '100%', width: '100%' }}
              direction="vertical"
              gutterSize={6}
              sizes={[70, 30]}
              >
                <div id="visualEditor">
                  <input value={code} onChange={(e)=> setCode(e.target.value)}/>
                </div>
                <div id="codeEditor">
                  <Editor
                    value={code}
                    onValueChange={(e)=> setCode(e.target.value)}
                    highlight={ code => highlight(code, languages.js)}
                  />
                </div>
              </Split>
            </div>
            <div id="previewContainer">
              <LivePreview />
            </div>
        </Split>
      </div>
      </LiveProvider>
    </div>
  );
};

export { EditorMenu, EditorInterface }
