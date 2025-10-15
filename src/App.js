import React, { Fragment } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import hotel from "./assets/hotel.jpg"
import "./assets/styles/App.css"
import Button from "./components/Button";
import Profile from "./components/Profile";
import Square from "./components/TicTacToe/Square";
import Board from "./components/TicTacToe/Board";
import State from "./components/StateManagement";
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import List from "./components/List/List";
import FormComponents from "./components/FormComponents/FormComponents";
import Product from "./components/Products/Product";
import FilterProduct from "./components/Products/FilterProduct";
import Mounting from "./components/Effect/Mounting";
import Updating from "./components/Effect/Updating";
import Lazy from "./components/CodeSpliting/Lazy";
import Login from "./components/Context/Login";
import { AuthProvider } from "./HigherOrderComponenet/AuthContext";
import Home from "./components/Context/Home";
import Password from "./components/Accessibility/Password";
import ErrorChecking from "./components/ErrorBoundry/ErrorChecking";
import ErrorComponent from "./components/ErrorBoundry/ErrorComponent";
import ErrorBoundryClass from "./components/ErrorBoundry/ErrorBoundaryClass";
import ParentComponent from "./components/ForwardingRef/ParentComponent";
import Fragments from "./components/Fragment/Fragments";
import Portals from "./components/Portals/Portals";
import LoginForm from "./components/Portals/LoginForm";
import StateManagement from "./components/StateManagement";
import ProfilerComponent from "./components/Profiler/ProfilerComponent";
import WithOutJsx from "./components/CreateElement/WithOutJsx";
import VideoPlayer from "./components/UseRefHook.jsx/Videoplayer";
import Rendering from "./components/ConditionalRendering/Rendering";
import ImageScroller from "./components/UseRefHook.jsx/ImageScroller";
import CustomElement from "./components/CustomElement/CustomElement";
import UseCallback from "./components/Hooks/UseCallback/UseCallback";
import UseMemo from "./components/Hooks/UseMemo/UseMemo";
import UseDebugValue from "./components/Hooks/UseDebugValue/UseDebugValue";
import FilterMemo from "./components/Hooks/UseMemo/FilterMemo";
import UncontrolledComponent from "./components/UncontrolledComponent/UncontrolledComponent";
import Counter from "./components/Hooks/UseReducer/Counter";
import Todo from "./components/Hooks/UseReducer/Todo";
import UseNavigate from "./components/Hooks/UseNavigate/UseNavigate";
import Users from "./components/Hooks/UseParams/Users";
import UseParams from "./components/Hooks/UseParams/UseParams";
import SearchForm from "./components/Hooks/UseLocation.jsx/SerachForm";
import SearchUser from "./components/Hooks/UseLocation.jsx/SearchUser";
import ProtectedHome from "./HigherOrderComponenet/ProtectedHome";
import ProductFetch from "./components/Hooks/CustomHooks/UseFetch/ProductFetch";
import UseDeferredValue from "./components/Hooks/UseDeferredValue.jsx/UseDeferredValue";
import UserInfo from "./components/Hooks/CustomHooks/UseLocalStorage/UserInfo";
import UseTransition from "./components/Hooks/UseTransition/Usetransition";
import UseLayoutEffect from "./components/Hooks/UseLayout/UseLayout";
import AppRoutes from "./AppRoutes";



const Greeting=()=>
{
    return <h3>Hello World</h3>
}

export  const App = () => {
  return (
    <Router>
      <AuthProvider>
     {/* <>
      <h1>React Configuration</h1>
      <img src={hotel} alt="Hotel" />
      <Greeting/>
      <Button/>
      <Profile/>
      </>  */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/board" element={<Board />} />
          <Route path="/state" element={<StateManagement />} />
          <Route path="/render" element={<Rendering />} />
          <Route path="/conditional/render" element={<ConditionalRendering />}/>
          <Route path="/list" element={<List/>} />
          <Route path="/form" element={<FormComponents/>} />
          <Route path="/product" element={<Product />}/>
          <Route path="/filterproduct" element={<FilterProduct />} />
          <Route path="/mount" element={<Mounting />} />
          <Route path="/update" element={<Updating />} />
          <Route path="/lazy"  element={<Lazy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/password" element={<Password />} />
          <Route path="/error"  element={<ErrorChecking>< ErrorComponent/></ErrorChecking>}/>
          <Route path="/errorclass" element={<ErrorBoundryClass><ErrorComponent /></ErrorBoundryClass>}/>
          <Route path="/forwardref" element={<ParentComponent />} />
          <Route path="/fragment"  element={<Fragments />} />
          <Route path="/portal"  element={<Portals />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path='/profiler' element={<ProfilerComponent />} />
          <Route path="/withoutjsx" element={<WithOutJsx />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/imagepath" element={<ImageScroller />} />
          <Route path="/uncontrolled" element={<UncontrolledComponent />}/>
          <Route path="/custom" element={<CustomElement />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/usedebug" element={<UseDebugValue />} />
          <Route path="filtermemo" element={<FilterMemo />} />
          <Route path="/usereducer/counter" element={<Counter/>}/>
          <Route path="/usereducer/todo" element={<Todo />} />
          <Route path="/usenavigate" element={<UseNavigate />} />
          <Route path="/useparams/users" element={<Users />} />
          <Route path="/profile/:id" element={<UseParams />} />
          <Route path="/uselocation/serachform" element={<SearchForm />} />
          <Route path="/searchdata" element={<SearchUser />} />
          <Route path="/hoc/home" element={<ProtectedHome />} />
          <Route path="/usefetch/product" element={<ProductFetch/>} />
          <Route path="/usedeferredvalue" element={<UseDeferredValue />} />
          <Route path="uselocal/userinfo" element={<UserInfo />} />
          <Route path="/usetransition" element={<UseTransition/>}/>
          <Route path="/uselayout" element={<UseLayoutEffect />} />
  
         </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;