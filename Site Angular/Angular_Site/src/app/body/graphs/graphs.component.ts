import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit{
  title = 'ng2-charts-demo';
  public data?: Item[];
  error?: string;
  public barChartPlugins = [];
  public barChartLegend = true;
  barChartData?: ChartConfiguration<'bar'>['data'];
  barChartData2?: ChartConfiguration<'bar'>['data'];
  barChartData3?: ChartConfiguration<'bar'>['data'];
  barChartData4?: ChartConfiguration<'bar'>['data'];
  public barChartOptions = {
    responsive: false
  };

  ngOnInit(): void {
    this.itemService.getItems().subscribe((list:Item[]) => {
        this.data = list
        const birotics: any = this.data?.filter(obj => obj.category === 'Birotics');
        const electronics: any = this.data?.filter(obj => obj.category === 'Electronics');
        const printers: any = this.data?.filter(obj => obj.category === 'Printers');
        const diverse: any = this.data?.filter(obj => obj.category === 'Divers');


        this.barChartData = {
          labels: birotics?.map((item: any) => (item.name)),
          datasets: [
            { data: birotics?.map((item: any) => (item.number)), label: 'Birotic Items',
             backgroundColor: '#69f0ae'
          }
          ]
        };

        this.barChartData2 = {
          labels: electronics?.map((item: any) => (item.name)),
          datasets: [
            { data: electronics?.map((item: any) => (item.number)), label: 'Electronic Items',
             backgroundColor: '#69f0ae'
          }
          ]
        };

        this.barChartData3 = {
          labels: printers?.map((item: any) => (item.name)),
          datasets: [
            { data: printers?.map((item: any) => (item.number)), label: 'Printer Items',
             backgroundColor: '#69f0ae'
          }
          ]
        };
        
        this.barChartData4 = {
          labels: diverse?.map((item: any) => (item.name)),
          datasets: [
            { data: diverse?.map((item: any) => (item.number)), label: 'Diverse Items',
             backgroundColor: '#69f0ae'
          }
          ]
        };
    }, (err) => {
        this.error = err.message;
    })
  }

  constructor(public itemService: ItemService) {
  }
}
