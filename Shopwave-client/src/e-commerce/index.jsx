import React , {useEffect , useState , Fragment}from "react";
import axios from "axios";
import Collection from "./components/collection";
import Contact from "./components/contacts";
import Home from "./components/home";
import Navbar from "./components/navbar";
import News from "./components/news";
import Sellers from "./components/sellers";
import Toptext from "./components/top-txt";
import './index.scss';

const Ecommerce = (props) => { 
    const [itemList , setItemList ] = useState([]);
    const getItem = async () => {
        try{
          const {data} = await axios.get('http://localhost:3001/shopping');
          console.log(data)
          setItemList(data)
        }catch (error){
          
          setItemList([])
        }
      }
    
      useEffect(() =>{
        getItem();
      },[])

    return (
        <Fragment>
           <Toptext/>
           <Navbar/>
           <Home/>
           <Collection/>
           <News/>
           <Sellers itemList={itemList}/>
           <Contact/>
        </Fragment>
    );
}

export default Ecommerce;
                
            
          
          