// import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
function App() {
  return  (

   
    <div className = "d-flex gap-4 justify-content-center pt-5">
    <Navbar/>
      <Cards 
    
      title="Javascript"
      src = "https://writeabout.tech/wp-content/uploads/2019/08/javascript-3-1280x728.png"
      prag="lorem10 hello how are you whars agoing fehf fgeife lsEgis euesygye "
      />
      <Cards 
            title="Reactjs"
            src = "https://writeabout.tech/wp-content/uploads/2019/08/javascript-3-1280x728.png"
            prag="lorem10 hello how are you whars agoing fehf fgeife lsEgis euesygye "/>
      <Cards
            title="Node"
            src = "https://writeabout.tech/wp-content/uploads/2019/08/javascript-3-1280x728.png"
            prag="lorem10 hello how are you whars agoing fehf fgeife lsEgis euesygye " />
    
    </div>
  );
}

export default App;
