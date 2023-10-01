import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-information-product',
  templateUrl: './information-product.component.html',
  styleUrls: ['./information-product.component.scss']
})
export class InformationProductComponent {
  center: google.maps.LatLngLiteral = { lat: 51.678418, lng: 7.809007 };
  options: google.maps.MapOptions = {
    zoomControl: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    backgroundColor: 'transparent',
    styles: [
      {
        featureType: 'water', // Tipo de característica (puede ser 'water', 'road', 'landscape', etc.)
        elementType: 'geometry', // Tipo de elemento (puede ser 'geometry', 'labels', 'all', etc.)
        stylers: [
          { color: '#000000' }, // Cambia el color del agua a negro
          { visibility: 'simplified' }, // Simplifica la visibilidad del elemento
        ]
      },
      // Puedes agregar más objetos para aplicar reglas de estilo adicionales
    ]
  };
  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: "basic",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany"
      ]
    }
  } ;
  @ViewChild("chart") chart!: ChartComponent;
  "stylers": [
    { "color": "#000000" }
  ]

  styleArray = [
    {
      featureType: "all",
      stylers: [
        { saturation: -80 }
      ]
    }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
      ]
    }, {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  constructor(){ }


}
