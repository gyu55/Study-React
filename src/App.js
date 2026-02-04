import { Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router/router";
import { RouteProvider } from "./context/expert/RouteContext";

function App() {
  
  return (
    <>
      {/* 
      // App에 router를 관리하는 방식은 권장되지 않음
      // -> router.js로 관리
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/intro" element={<Intro />}/>
        <Route />
        <Route />
      </Routes> */}
      <RouteProvider>
        <RouterProvider router={router} />
      </RouteProvider>
    </>
  );
}

export default App;
