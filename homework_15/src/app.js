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
    this.removeColor = this.removeColor.bind(this);
  }

  handleChange (e){
    this.setState({ searchStr: e.target.value },()=> {
      this.filterSearch();
    });
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
    if(this.state.selectedColors.length < 10){
    let add = this.state.showColor.find(item=>item.color === color);
    let index = this.state.showColor.indexOf(add);
    let colors = this.state.selectedColors;
    colors.push(color);

    let showColor = this.state.showColor;
    showColor.splice(index,1);

    this.setState({
      selectedColors: colors,
      showColor: showColor,
      doesShowColor: false
    }),()=> {
      this.filterSearch();
    }}

    console.log(color);
  }

  removeColor(color) {
    let deleteColor = this.state.selectedColors.find(item=>item.color === color);
    let index = this.state.selectedColors.indexOf(deleteColor);
    let showColor = this.state.showColor;
    showColor.push(deleteColor);

    let selected = this.state.selectedColors;
    selected.splice(index, 1);
    showColor.sort(function (a, b) {
      return (a.id - b.id);
    });

    this.setState({
      showColor: showColor,
      selectedColors: selected,
    },()=>
  this.filterSearch());
    if(this.state.selectedColors.length === 0) {
      this.setState({
        doesShowColor: true
      })
    }

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
          <div>
            <div className="header">
              <Filter onChange={this.handleChange.bind(this)}/>

                <SelectedColors
                doesShowColor={this.state.doesShowColor}
                list={this.state.selectedColors}
                onClick={this.removeColor.bind(this)}/>

                <AmountofColorItems
                length={this.state.showColor.length}
                />
             </div>
             <div className="color-box">
              {message}
              {color.map((item, id) => {
              return <div key={id}>
                        <ListofAvailableColorItems
                        color={item.color} id={item.id}
                        selectedColors={this.state.selectedColors}
                        onClick={this.addColor.bind(this)}/>
                      </div>
                    })}
             </div>
          </div>
    )
  }
}


// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);
