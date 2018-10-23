import React, { Component } from "react";

export class Counter extends Component {

  componentDidUpdate() 
  { 
    console.log ('Counter - Updated')
  }

  componentWillUnmount()
  {
    console.log('Counter -  Unmonunt');
  }

  // state = {
  //     value : this.props.counter.value,
  //     // imageUrl:'https://picsum.photos/200',
  //     // tags : []
  // };

  styles = {
    fontWeight: 'bold',
    fontSize:30,
    
  };


  // handleIncrement = (product) => {
  //   // console.log(product);
  //   this.setState({ value :  this.state.value + 1})
  // }



  // renderTags() {
  //   if ( this.state.tags.length===0) return <p>there are no tags!</p>

  //   return <ul>{ this.state.tags.map (tag => <li key={tag}>{tag}</li>)}</ul>
  // }

  

  render() {
    console.log('Counter - rendered');
    return (
      <div>
        {/* <h4>  Counter #{this.props.id} </h4>  */}
        <span className={this.getBadgeClasses()}  style={this.styles}> { this.formatCount() }</span>
        <button 
        // onClick={ () =>this.handleIncrement() }  
        onClick={() => this.props.onIncrement(this.props.counter)}
        className="btn btn-secondary btn-sm">Increment 
        </button>
        <button 
        className="btn btn-danger btn-sm m-2" 
        onClick={ () => this.props.onDelete (this.props.counter.id)}>
        Delete</button>
      </div>
     
    );
  }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += (this.state.value === 0) ? "warning" : "primary";
        classes += this.props.counter.value === 0 ? "warning" : "primary";

        return classes;
    }

    formatCount (){ 
      
      // console.log ('number')
      // console.log (this.state.count)
    // const {count} = this.state.count;
    // console.log(count);
    return this.props.counter.value === 0 ? 'zero': this.props.counter.value;
    }
}

