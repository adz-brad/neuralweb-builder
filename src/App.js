import { EditorInterface, EditorMenu } from './components/editor'

function App() {

  return (

    <div
      id="app"
      className="app"
      style={{
        height: "100vh",
        width: "100%",
        display: 'flex',
        flexDirection:'row'
      }}
    >
      <EditorMenu />
      <EditorInterface />
    </div>

  );
}

export default App;
