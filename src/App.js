import Layout from "./layouts";
import GlobalFonts from "./common/styles";
import Home from "./components/home";

function App() {
  return (
    <>
      <GlobalFonts />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
