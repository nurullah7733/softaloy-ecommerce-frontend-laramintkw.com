import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

import Header from "./components/header/header";
import AnnouncementBar from "./components/header/AnnouncementBar";
import Footer from "./components/footer/footer";

import HomePage from "./pages/home/home";
import GoogleTranslate from "../utils/googleTranslate/googleTranslate";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AnnouncementBar />
        <Header />
        <HomePage />
        <GoogleTranslate />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
