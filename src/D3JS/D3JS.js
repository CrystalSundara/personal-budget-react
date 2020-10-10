import React, { Component } from 'react';

import * as d3 from 'd3';  
import budgetAPI from '../budgetAPI';


export class D3JS extends Component {

    constructor(props) {  
        super(props);  
        this.state = { 
            Data: [], 
            width: 750,
            height: 600,
            margin: 50
        };  
    }    

    async componentDidMount() {

        const resData = await budgetAPI.get();
        var labels = [];
        // The radius of the pie chart is half the smallest side
        for (var i = 0; i < resData.data.length; i++){
            labels[i] = resData.data[i].title;
        }

        this.setState({
            Data: resData.data,
        });

        this.drawChart(this.state.Data);
    }

    drawChart(data) {
        var labels = [];
        for (let i = 0; i < data.length; i++) {
            labels[i] = data[i].title;
        }

        // The radius of the pie chart is half the smallest side
        var radius = Math.min(this.state.width, this.state.height) / 2 - this.state.margin;

        var svg = d3.select('figure#pie')
        .append('svg')
        .attr('width', this.state.width)
        .attr('height', this.state.height)
        .append('g')
        .attr(
        'transform',
        'translate(' + this.state.width / 2 + ',' + this.state.height / 2 + ')'
        );

        var colors = d3.scaleOrdinal()
        .domain(labels)
        .range(['#790149',
                '#005Fcc',
                '#00EBC1',
                '#A700FC',
                '#FF6E3A',
                '#FFDC3D',
                '#00B408',
                '#003D30']);
            // Compute the position of each group on the pie:
            const pie = d3.pie().value((d) => Number(d.budget));

            // Build the pie chart
            svg
            .selectAll('pieces')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(0)
                .outerRadius(radius)
            )
            .attr('fill', (d, i) => (colors(i)))
            .attr('stroke', '#121926')
            .style('stroke-width', '1px');
        
            // Add labels
            const labelLocation = d3.arc()
            .innerRadius(100)
            .outerRadius(radius);
        
            svg
            .selectAll('pieces')
            .data(pie(data))
            .enter()
            .append('text')
            .text(d => d.data.title)
            .attr('transform', d => 'translate(' + labelLocation.centroid(d) + ')')
            .style('text-anchor', 'middle')
            .style('font-size', 15);
    }


    render(){
        return <figure id="pie"></figure>

    }
}

export default D3JS; 
