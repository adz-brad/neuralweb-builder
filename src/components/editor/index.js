import React, { useState } from "react";
import Split from "react-split";
import { LiveProvider, LivePreview } from 'react-live'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../../assets/files/prism.css";

const EditorMenu = () => {
  return(
    <div className="editorMenu glass">

    </div>
  )
}

const EditorInterface = () => {

  const defaultMessage = 
  `// 
  
  Welcome to the neuralWeb Editor. Drag and drop components to create your awesome new page OR if you're a pro, start coding in JSX!
  
  //
  `;

  const [ code, setCode ] = useState(`${defaultMessage}`)

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
                  
                </div>
                <div id="codeEditor" style={{ background: '#111'}}>
                  <Editor
                    value={code}
                    onValueChange={(code) => setCode(code)}
                    highlight={(code) => highlight(code, languages.js)}
                    padding={10}
                    style={{
                      fontFamily: '"Fira code", "Fira Mono", monospace',
                      fontSize: 12,
                      background: '#111',
                      color: '#eee',
                      margin: '2px'
                    }}
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
