import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Stories from "./pages/Stories";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="d-flex justify-content-center align-items-center">
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path='/new' element={<Stories type={'new'} />} />
              <Route path='/top' element={<Stories type={'top'} />} />
              <Route path='/best' element={<Stories type={'best'} />} />
              <Route path='*' element={<Main />} />
            </Routes>
            <Footer />
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
