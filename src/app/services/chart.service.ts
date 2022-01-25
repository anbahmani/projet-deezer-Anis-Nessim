import { Injectable } from '@angular/core';
import { Chart } from '../models/Chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private chart !: Chart;

	public getChart() : Chart{
		return this.chart;
	}

	public setChart(chart : Chart) {
		this.chart = chart;
	}
  
}
