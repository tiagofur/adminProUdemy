import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent {

  // tslint:disable-next-line: no-input-rename
  @Input('title') public titulo: string = 'Sin Titulo';
  // Doughnut
  // tslint:disable-next-line: no-input-rename
  @Input('label') public doughnutChartLabels: Label[] = ['Download', 'In-Store', 'Mail-Order'];
  // tslint:disable-next-line: no-input-rename
  @Input('data') public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];

  public colors: Color[] = [
    {backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]}
  ];

}
