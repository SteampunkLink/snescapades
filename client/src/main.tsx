import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./store.ts";
import "./index.css";
import App from "./App.tsx";
import HomeScreen from "./screens/HomeScreen.tsx";
import SeriesIndexScreen from "./screens/SeriesIndexScreen.tsx";
import SeriesScreen from "./screens/SeriesScreen.tsx";
import EpisodeScreen from "./screens/EpisodeScreen.tsx";
import RankScreen from "./screens/RankScreen.tsx";
import FaqsScreen from "./screens/FaqsScreen.tsx";
import FriendsScreen from "./screens/FriendScreen.tsx";
import ScratchCardScreen from "./screens/ScratchCardScreen.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/page/:pageNum" element={<HomeScreen />} />
      <Route path="/series" element={<SeriesIndexScreen />} />
      <Route path="/series/:seriesName" element={<SeriesScreen />} />
      <Route path="/series/:seriesName/:pageNum" element={<SeriesScreen />} />
      <Route path="/episode/:show/:epNum" element={<EpisodeScreen />} />
      <Route path="/ranks" element={<RankScreen />} />
      <Route path="/faqs" element={<FaqsScreen />} />
      <Route path="/friends" element={<FriendsScreen />} />
      <Route path="/scratch" element={<ScratchCardScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
