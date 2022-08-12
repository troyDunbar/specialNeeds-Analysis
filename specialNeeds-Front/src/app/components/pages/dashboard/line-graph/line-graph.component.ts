import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  constructor( public data: DataService) { }

  n = this.data.outputArray.length - 1;

  ngOnInit(): void {
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
  chart: {
    backgroundColor: 'var(--background-dark)',
  },
  title: {
    style: {
      color: 'var(--text-dark)',
      fontFamily: 'Roboto'
    },
    text: 'Account Tracking'
  },
  subtitle: {
    style: {
      color: 'var(--text-light)',
      fontFamily: 'Roboto'
    },
    text: 'API-Request'
  },
  legend: {
    itemStyle: {
      color: 'var(--text-light)'
    }
  },
  xAxis: {
    title: {
      text: 'Years',
      style: {
        color: 'var(--text-dark)',
        fontSize: '1.25em',
        fontFamily: 'Roboto'
      }
    },
    labels: {
      style: {
        color: 'var(--text-light)',
        fontFamily: 'Roboto'
      }
    }
  },
  yAxis: [{
    title: {
      text: 'USD ($)',
      style:{
        color: 'var(--text-dark)',
        fontSize: '1.25em',
        fontFamily: 'Roboto'
      }
    },
    labels: {
      style: {
        color: 'var(--text-light)',
        fontFamily: 'Roboto'
      }
    }
  }, {
  title: {
    text: ' '
  },
    linkedTo: 0,
    opposite: true,
    labels: {
      style: {
        color: 'var(--text-light)',
        fontFamily: 'Roboto'
      }
    }
  }],
  series: [
    { //defeine net worth display
      name: "ABLE Account",
      type: "line",
      data: this.data.outputArray[this.n].ableAccountValues,
      color: '#005f9e'
    },
    { //define loan display
      name: "Savings Account",
      type: "line",
      data: this.data.outputArray[this.n].savingsAccountValues,
      color: '#8bd3e6',
    },
    {
      name: 'Post Tax',
      type: 'line',
      data: this.data.outputArray[this.n].postTaxCapitalValues,
      color: '#7EB4EA'
    }
  ]
};

}
