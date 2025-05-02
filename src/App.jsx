import "./App.css";
import { open } from "@tauri-apps/plugin-dialog";
function App() {

  const readFileContent = async () => {
    try {
      const selectPath = await open({
        multiple: false,
        title: "Select a file"
      });
      console.log(selectPath);
    } catch (error) {
      alert("Error: " + error);
    }
  }

  return (
    <div className="container">
      <div className="left">
        {/* <h1>Image testing</h1> */}
      </div>
      <div className="right">
        <div className="title">
          <h1>Friendly</h1>
          <h1>Friends</h1>
          <h1>Student Council</h1>
        </div>

        <div className="buttons">
          <button onClick={readFileContent}>
            <p>Start</p>
          </button>
          <button>
            <p>Update</p>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
