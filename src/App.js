import { useState } from "react";
import "./App.css";
import ImageDemo from "./comp/ImageDemo";
import ShowImage from "./comp/ShowImage";

const source="https://mobgis.ceinsys.com:2443/survey_app_api_dev/data/download/photo/5120411254592922130001_20082023_133818"
function App() {
  const [toggle, setToggle] = useState("normal");
  function OnCloseHandler() {
    if (toggle == "block") setToggle("normal");
    else setToggle("block");
  }
  return (
    <div className="App">
      {/* <ImageDemo src="https://mobgis.ceinsys.com:2443/survey_app_api_dev/data/download/photo/5120411254592922130001_20082023_133818"/> */}
      {toggle == "block" && (
        <ShowImage
        source={source}
          toggle={toggle}
          onClose={OnCloseHandler}
        />
      )}

      {toggle == "normal" && (
        <>
          <img
            src={source}
            height={300}
            width={300}
            onError={() => {
              alert("Image not found");
            }}
            alt="Not found"
            onClick={OnCloseHandler}
          />
        </>
      )}
      Other content
    </div>
  );
}

export default App;
