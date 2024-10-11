import { useState } from "react";
function App() {
  const [color, setcolor] = useState("#e58799");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <colorBar className="bg-slate-200 rounded-3xl min-w-32 h-16 px-4 py-3 flex align-center  gap-6 fixed bottom-4 left-10">
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#9f75ff" }} onClick={()=>setcolor("#9f75ff")}>Purple Heart</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#d3a096" }} onClick={()=>setcolor("#d3a096")}>Contessa</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#d6675d" }} onClick={()=>setcolor("#d6675d")}>Chestnut</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#afd89d" }} onClick={()=>setcolor("#afd89d")}>Mantis</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#fbd24e" }} onClick={()=>setcolor("#fbd24e")}>Sharon</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#9cb6dd" }} onClick={()=>setcolor("#9cb6dd")}>Waikawa</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#f0b081" }} onClick={()=>setcolor("#f0b081")}>Mocha</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#8ee7af" }} onClick={()=>setcolor("#8ee7af")}>Salem</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#f8d1fd" }} onClick={()=>setcolor("#f8d1fd")}>Plum</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#f0ee98" }} onClick={()=>setcolor("#f0ee98")}>Kumera</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#eeb3b9" }} onClick={()=>setcolor("#eeb3b9")}>Cerise</button>
          <button className="h-10 w-32 px-4 rounded-2xl px-22 " style={{ backgroundColor: "#cfe86e" }} onClick={()=>setcolor("#cfe86e")}>Conifer</button>
          
        </colorBar>
      </div>
    </>
  );
}

export default App;
