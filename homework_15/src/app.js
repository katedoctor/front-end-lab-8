import React, { Component } from 'react';
import SearchForm from './features/SearchForm';
import ColorItems from './features/ColorItems';
import CounterColor from './features/CounterColor';
import SelectedColors from './features/SelectedColors';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showColor: [],
      selectedColors: [],
      suitableColor: [],
      searchStr: '',
      doesShowAll: false
    }
  }

  handleChange (e){
    this.setState({ searchStr: e.target.value },()=> {
      this.filterSearch();
    });
  }

  createList(item, id){
    return (
      <div key={item.id} >
       <ColorItems color={item.color} />
      </div>
    )
  }

  HandlerClick() {
    this.setState({selectedColors: 'red'})
    // let id = target.event.id;
    // this.setState({ selectedColors: id})
  }

  componentDidMount() {
    fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
    .then(response => response.json())
      .then(data => this.setState({ showColor: data, suitableColor: data }))
  }

  filterSearch(){
    let searchStr = this.state.searchStr;
    let colors = [];

    let showColors = this.state.suitableColor.filter(el => {
      if(el.tags.toString().match(searchStr)){
        colors.push(el);
            }
    })
    this.setState({ showColor: colors})
  }

  render() {
    let color = this.state.showColor;
    return (
            <div className="">
              <SearchForm
                onChange={this.handleChange.bind(this)}/>
                <SelectedColors color={this.state.selectedColors}/>
              <CounterColor length={this.state.showColor.length} />
              {color.map(this.createList)}
              {/* <ColorItems onClick={this.Click.bind(this)} /> */}
            </div>
    )
  }
}


// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);