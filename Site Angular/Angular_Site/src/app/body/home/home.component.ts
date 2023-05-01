import { Component, ElementRef, HostBinding, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { toPath } from 'svg-points';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public path1?: string;
  public path2?: string;
  public path3?: string;
  ngOnInit(): void {
    this.path1 = toPath({
      type: 'circle',
      cx: 50,
      cy: 50,
      r: 10
    });

    this.path2 = toPath({
      type: 'line',
      x1: 50,
      x2: 50,
      y1: 50,
      y2: 1000
    });

    this.path3 = toPath({
      type: 'circle',
      cx: 50,
      cy: 1000,
      r: 10
    });
  }

}
