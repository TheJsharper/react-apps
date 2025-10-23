import {
  createMemoryRouter
} from "react-router";

export const  ProfessionalAppRouter = createMemoryRouter([
  {
    path: "/",
    element: <div> HELLO ROUTER</div>  ,
    //loader: loadRootData,
  },
]);

//export const router = createMemoryRouter([])