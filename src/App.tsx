import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] overflow-hidden">
      <Header />
      <div className="flex justify-center items-center flex-col w-full md:w-9/12 lg:w-2/4 h-full mx-auto px-6 md:p-0">
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
