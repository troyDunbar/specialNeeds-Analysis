import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css', '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class PieChartComponent implements OnInit {

  constructor( public data: DataService ) { }

  ngOnInit(): void {

  }

Highcharts: typeof Highcharts = Highcharts;
chartOptions: Highcharts.Options = {
  chart: {
    backgroundColor: 'var(--background-dark)',
  },
  title: {
    text: 'Annual Expenses',
    style: {
      color: 'var(--text-dark)'
    }
  },
  subtitle: {
    text: 'API-Request',
    style: {
      color: 'var(--text-light)'
    }
  },
  legend: {
    itemStyle: {
      color: 'var(--text-light)'
    }
  },
  series: [{
    type: 'pie',
    name: 'USD ($)',
    data: [{
      name: 'Housing',
      color: '#ffffff50',
      description: 'Data 1 description',
      y: Number(this.data.expenses.housing)
      },
    {
      name: 'Food',
      color: '#7EB4EA30',
      description: 'Data 2 description',
      y: Number(this.data.expenses.food)
      },
    {
      name: 'Utilities',
      description: 'Data 3 description',
      y: Number(this.data.expenses.utilities),
      color: '#7EB4EA50'
    },
    {
      name: 'Transportation',
      description: 'Data 3 description',
      y: Number(this.data.expenses.transportation),
      color: '#7EB4EA70'
    },
    {
      name: 'Medical CoPay',
      description: 'Data 3 description',
      y: Number(this.data.expenses.medicalCoPay),
      color: '#7EB4EA95'
    },
    {
      name: 'Entertainment',
      description: 'Data 3 description',
      y: Number(this.data.expenses.entertainment),
      color: '#7EB4EA'
    },
    {
      name: 'Conditional Care',
      description: 'Data 3 description',
      y: Number(this.data.expenses.conditionCare),
      color: 'white'
    }    
    ],
    }],
  };  

}
