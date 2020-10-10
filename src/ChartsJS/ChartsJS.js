import React, { Component } from 'react';

import { Pie } from 'react-chartjs-2';  
import budgetAPI from '../budgetAPI';


export class ChartsJS extends Component {

        constructor(props) {  
                super(props);  
                this.state = { Data: {} };  
        } 

    
  async componentDidMount() {

    const resData = await budgetAPI.get();
    const chartLabels = [];
    const values = [];
    for (var i = 0; i < resData.data.length; i++){
        chartLabels[i] = resData.data[i].title;
        values[i] = resData.data[i].budget;
    }
    console.log(chartLabels);
    console.log(values);

    this.setState({
        Data: {
            labels: chartLabels,
            datasets: [
            {
                data: values,
                backgroundColor: [
                    '#790149',
                    '#005Fcc',
                    '#00EBC1',
                    '#A700FC',
                    '#FF6E3A',
                    '#FFDC3D',
                    '#00B408',
                    '#003D30'
                ],
            },
            ]
        }

    });
    
  }

  render() {
    return (
        <div>
            <Pie data={this.state.Data}
                options={{ maintainAspectRatio: false }} />
      </div>
    )
  }
}

export default ChartsJS; 
