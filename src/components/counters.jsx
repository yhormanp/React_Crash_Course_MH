import React, { Component } from 'react';
import {Counter} from '../components/counter';

class Counters extends Component {
   

    render() { 
        console.log('Counters - rendered');
        const {onReset, counters , onDelete, onIncrement } = this.props;
        return (
        <div>
            <button className="btn btn-primary btn-sm m-2" 
                onClick={onReset }>Reset </button>
            {this.props.counters.map(counter => 
                <Counter 
                    key={counter.id} 
                    counter={counter}
                    onDelete={onDelete}
                    onIncrement={this.props.onIncrement}
                >
            </Counter>)};
        </div>  );
    }
}
 
export default Counters;