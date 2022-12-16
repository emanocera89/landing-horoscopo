import { useEffect, useState } from 'react';
import './App.css';
import { getItems } from './services/items';

import moment from 'moment/moment';
import Item from './components/Item/Item';
import MainContainer from './components/MainContainer/MainContainer';


function App() {
  const [items, setItems] = useState([])
  const [sortValue, setSortValue] = useState('0')

  useEffect(() => {
    getItems()
      .then((data) => {
        setItems(data);
        sortItems(data, "0")
      })
      .catch((error) => console.log(error.message))
  }, []);

  const handleSortChange = (e) => {
    console.log(e.target.value);
    sortItems(items, e.target.value)
    setSortValue(e.target.value);
  }

  const sortItems = (data, sortType) => {
    const newItems = [...data];
    switch (sortType) {
      case '0':
        newItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case '1':
        newItems.sort((a, b) => a.name.localeCompare(b.name)).reverse();
        break;
      case '2':
        newItems.sort((a, b) =>
          new Date(moment(`${a.init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format()) - (new Date(moment(`${b.init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format()))
        );
        //console.log(new Date(moment(`${newItems[0].init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format()))
        break;
      case '3':
        newItems.sort((a, b) =>
          new Date(moment(`${a.init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format()) - (new Date(moment(`${b.init_date}-${new Date().getFullYear()}`.split("-").reverse().join("-")).format()))
        ).reverse();
        break;
    }
    setItems(newItems)
  }



  return (
    <div className="App">
      <MainContainer />
      
    </div>
  );
}

export default App;
