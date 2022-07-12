import Header from "./Header";
import Movies from "./Movies";
import Search from "./Search";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        
         <Header/>
        <Search />
        <Movies />
       
      </div>
      <Footer/>
    </>
  );
};

export default Home;
