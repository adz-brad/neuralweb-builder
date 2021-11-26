import Split from "react-split";

const EditorMenu = () => {
  return(
    <div className="editorMenu glass">

    </div>
  )
}

const EditorInterface = () => {

  // Add a split in the builder for the 'Code Editor' that can be toggled
  // Add JSX to HTML converter to get an HTML string from the existing JSX code
  // Render HTML code in editor and elements in preview

  return (
    <div className="editorInterfaceWrapper">
      <div className="editorSubMenu glass">
      </div>
      <div className="editorInterface glass">
          <Split
            style={{ display: "flex", flexDirection: "row", height: '100%' }}
            gutterSize={6}
            sizes={[50, 50]}
          >
            <div id="builderContainer">
            </div>
            <div id="previewContainer" dangerouslySetInnerHTML={{ __html: null }} />
        </Split>
      </div>
    </div>
  );
};

export { EditorMenu, EditorInterface }
