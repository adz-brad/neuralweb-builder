import { EditorInterface } from './components/editor'
import { RecoilRoot } from 'recoil'

function App() {

  return (
  <RecoilRoot>
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
      <EditorInterface />
    </div>
    </RecoilRoot>
  );
}

export default App;
