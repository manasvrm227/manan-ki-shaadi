import Layout from "./layouts";
import GlobalFonts from "./common/styles";
import Home from "./components/home";
import OurStory from "./components/our-story";

function App() {
  return (
    <>
      <GlobalFonts />
      <Layout>
        <Home />
        <OurStory />
      </Layout>
    </>
  );
}

export default App;
