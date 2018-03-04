import { Component, OnInit } from '@angular/core';
import {tileLayer, latLng, circle, polygon} from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 7,
    center: latLng(-33.7867222, 148.2725081)
  };

  layersControl = {
    overlays: {
      'Education': polygon([[-30.09098,145.93233],[-29.91719,146.90727],[-29.97397,148.05176],[-29.42481,148.85838],[-29.45873,149.85352],[-30.39183,149.74365],[-31.40991,149.26025],[-31.74685,148.73291],[-32.15701,148.64502],[-32.22651,148.25084],[-31.46877,146.38819],[-30.09098,145.93233]])
    }
  }
  ngOnInit() {
  }


}
