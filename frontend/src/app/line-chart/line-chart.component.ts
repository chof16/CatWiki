import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements AfterViewInit {
  @Input() coloredLines!: number;
  @Input() etiqueta!: string;

  ngAfterViewInit() {

    this.drawLines();

  }

  drawLines() {
    let elemento = document.getElementById("linea-"+this.etiqueta)
    for (let i = 0; i < this.coloredLines; i++) {
      if (elemento) {
        let span = document.createElement("span")
        span.style.cssText = "background-color: #544439;min-width: 50px;width:70px;height: 18px;border-radius: 8px;display:flex"
        elemento.insertAdjacentElement("beforeend", span)
      }
    }
    for (let i = 0; i < 5-this.coloredLines; i++) {
      if (elemento) {
        let span = document.createElement("span")
        span.style.cssText = "background-color: #E0E0E0;min-width: 50px;width:70px;height: 18px;border-radius: 8px;display:flex"
        elemento.insertAdjacentElement("beforeend", span)
      }
    }
  }

}