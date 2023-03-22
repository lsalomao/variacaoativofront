import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AtivoService } from 'src/app/shared/service/ativo.service';
import * as moment from 'moment';

Chart.register(...registerables);

@Component({
  selector: 'app-preco-ativo-grafico',
  templateUrl: './preco-ativo-grafico.component.html',
  styleUrls: ['./preco-ativo-grafico.component.scss']
})

export class PrecoAtivoGraficoComponent implements OnInit {

  @ViewChild('meuGrafico', { static: true }) chartCanvas: ElementRef;

  chart: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  constructor(public ativoService: AtivoService) { }

  ngOnInit() {

    this.ativoService.getDadosAtivos("PETR4").subscribe(
      data => {

        const openPrices = data.chart.result[0].indicators.quote[0].open;
        const filteredOpenPrices = openPrices.filter(price => price > 0);
        const dates = data.chart.result[0].timestamp.map(timestamp => moment(timestamp * 1000).format('DD/MM/YYYY'));

        this.RenderChart(dates, filteredOpenPrices, 'line');
      });
  }

  RenderChart(labeldata: any, maindata: any, type: any) {
    new Chart(this.chartCanvas.nativeElement, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          label: 'Valor',
          data: maindata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1,
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
}
