import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AtivoService } from 'src/app/shared/service/ativo.service';
import * as moment from 'moment';


@Component({
  selector: 'app-preco-ativo-table',
  templateUrl: './preco-ativo-table.component.html',
  styleUrls: ['./preco-ativo-table.component.scss']
})

export class PrecoAtivoTableComponent {
  dataSource: any[] = [];

  constructor(public ativoService: AtivoService, private datePipe: DatePipe) {

    this.ativoService.getDadosAtivos("PETR4").subscribe(
      data => {

        const prices = data.chart.result[0].indicators.quote[0].open;
        const dates = data.chart.result[0].timestamp;

        const rows = [];
        const firstPrice = prices[0];
        let previousPrice = prices[0];

        for (let i = 0; i < 30; i++) {

          const currentDate = moment(dates[i] * 1000).format('DD/MM/YYYY');
          const currentPrice = prices[i];

          const changeFromPrevious = currentPrice / previousPrice - 1;
          const changeFromFirst = currentPrice / firstPrice - 1;

          rows.push({
            day: i + 1,
            date: currentDate,
            price: currentPrice,
            changeFromPrevious: changeFromPrevious,
            changeFromFirst: changeFromFirst,
          });

          previousPrice = currentPrice;
        }

        console.log(rows);
        this.dataSource = rows;
      });

  }
  displayedColumns = ['date', 'price', 'changeFromPrevious', 'changeFromFirst'];

}