import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Map } from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit, OnDestroy {
  public map: Map | undefined;

  ngAfterViewInit(): void {
    this.map = new Map({
      container: 'map', // container id
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1 // starting zoom
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

}
