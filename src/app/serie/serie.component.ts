import { Component, OnInit } from '@angular/core';
import { dataSeries } from './dataSeries';
import { Serie } from './serie';
import { SerieService } from './serie.service';



@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {



  constructor(private serieService: SerieService) {}
  series: Array<Serie> = [];


  getSerieList(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      const total: HTMLElement = document.getElementById("total-series")!;
      total.innerHTML = `Seasons average: ${getPromedioSeas(this.series)}`;
    });

  }

  ngOnInit() {
    this.getSerieList();
  }

}

function getPromedioSeas(series: Serie[]): number {
  var total: number = 0;
  var conteo: number = 0;
  series.forEach((serie) => total = total + serie.seasons);

  series.forEach((serie) => conteo = conteo + 1);
  return total/conteo
}

