import './App.css';
import Menu from './Menu'
import Lista from './Lista'
import React from 'react'
import Data from './datos-libros.json'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      originalData: Data,
      copyData: []
    };
  }

  componentDidMount(){
    this.initData();
  }

  initData = () => {
    this.setState((state,props) => ({
      copyData: [...state.originalData]
    }));
  }

  onSearch = (query) => {
    if(query === ''){
      this.initData();
    }else{
      const temp = [...this.state.originalData];
      let res = [];

      temp.forEach(item => {
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyData: [...res] });
    }
  }

  render() {

    return (
      <div className="App">
        <Menu title="C-Books" onsearch={this.onSearch} />
        <Lista items={this.state.copyData} />
      </div>
    );
  }
}


export default App;
