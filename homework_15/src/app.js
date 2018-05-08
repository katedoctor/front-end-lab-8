import React, { Component } from 'react';
import Filter from './features/Filter';
import ListofAvailableColorItems from './features/ListofAvailableColorItems';
import AmountofColorItems from './features/AmountofColorItems';
import SelectedColors from './features/SelectedColors';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showColor: [],
      selectedColors: [],
      suitableColor: [],
      message:'',
      searchStr: '',
      doesShowColor: true
    }
  }

  handleChange (e){
    this.setState({ searchStr: e.target.value },()=> {
      this.filterSearch();
    });
  }

  // createList(item, id){
  //   return (
  //     <div key={item.id} >
  //       <ListofAvailableColorItems color={item.color} id={item.id}/>
  //     </div>
  //   )
  // }

  handlerClick() {
    this.setState({selectedColors: 'red'})
    // let id = target.event.id;
    // this.setState({ selectedColors: id})
  }

  filterSearch() {
    let searchStr = this.state.searchStr;
    let colors = [];

    let showColors = this.state.suitableColor.filter(el => {
      if (el.tags.toString().match(searchStr)) {
        colors.push(el);
      }
    })
    this.setState({ showColor: colors })
  }

  addColor(color) {
    console.log(this.state.selectedColors)
    if(this.state.selectedColors.length < 11) {

      // let suitable = this.state.suitableColor;
      // let index = suitable.indexOf(color);
      // suitable.slice(index, 1);
      // this.setState({
      //   selectedColors: color,
      // suitableColor: suitable})
    }
    console.log(color);

  }

  componentDidMount() {
    fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
    .then(response => response.json())
      .then(data => this.setState({ showColor: data, suitableColor: data }))
        .catch(err => console.error(err))
  }




  render() {
    let color = this.state.showColor;
    let message = '';
    if (this.state.showColor.length === 0) {
      message = 'There no color found'
    }
      return (
            <div className="">
            <div className="header">
              <Filter
                onChange={this.handleChange.bind(this)}/>
                <SelectedColors doesShowColor={this.state.doesShowColor}
                 list={this.state.selectedColors}/>
          <AmountofColorItems length={this.state.showColor.length}/>
        </div>
              <div className="color-box">
              {message}
              {color.map((item, index) => {
                return <div key={index}>
                <ListofAvailableColorItems color={item.color} id={item.id}
                 onClick={this.addColor}/>
                </div>
              })}
            </div>
            </div>
    )
  }
}


// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);