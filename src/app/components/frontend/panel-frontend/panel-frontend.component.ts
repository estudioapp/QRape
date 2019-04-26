import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-panel-frontend',
  templateUrl: './panel-frontend.component.html',
  styleUrls: ['./panel-frontend.component.css']
})
export class PanelFrontendComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['QR usados', 'QR disponibles'];
  public pieChartData: number[] = [40, 10];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['yellow', 'violet'],
    },
  ];


  elementType = 'url';
  value = 'https://assets.econsultancy.com/images/resized/0002/4236/qr_code-blog-third.png';
  @ViewChild('result') resultElement: ElementRef;
  showQRCode: boolean = true;
  constructor(private renderer: Renderer2) {

  }

  render(e) {
    console.log(e.result);
    let element: Element = this.renderer.createElement('p');
    element.innerHTML = e.result;
    this.renderElement(element);
  }

  renderElement(element) {
    for (let node of this.resultElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.resultElement.nativeElement, node);
    }
    this.renderer.appendChild(this.resultElement.nativeElement, element);
  }



  ngOnInit() {
  }

}
