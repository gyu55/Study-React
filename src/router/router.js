import { createBrowserRouter } from "react-router-dom";
import Main from "./main/Main";
import Intro from "./intro/Intro";
import Job from "./job/Job";
import Post from "./post/Post";
import Layout from "./layout/Layout";
import DetailLayout from "./detail/DetailLayout";
import Detail from "./detail/Detail";
import Community from "./detail/Community";
import NotFound from "./notfound/NotFound";
import User from "../user/User";
import NotUser from "../user/NotUser";

// 구분점이 필요!
//         path를 통해서도 값을 넘길 수 있다.
//         1. Query String
//         2. Path Variable



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",  // path를 빈 문자열을 설정하면 부모 요소인 path: "/"도 화면에 보여줌
                   // 중첩 라우팅
        element: <Main />
      },
      {
        path: "/intro",
        element: <Intro />
      },
      {
        path: "/job",
        element: <Job />
      },
      {
        path: "/post/:id", // Dynamic Routing
        element: <Post />
      },
      {
        path: "/detail",
        element: <DetailLayout />,
        children: [
          {
            path: "",
            element: <Detail />
          },
          {
            path: "community",
            element: <Community />
          }
        ]
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/not-user",
        element: <NotUser />
      },
    ]
  },
  { // 선언된 페이지를 제외하고 모든 페이지들은 예외 페이지 (NotFound Page)
    path: "*",
    element: <NotFound />
  }
])

export default router;