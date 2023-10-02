import {Component, OnInit, ViewChild} from '@angular/core';
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
  marker = {
    position: { lat: 35.682839, lng: 139.759455  },
  }
  center: google.maps.LatLngLiteral = { lat: 35.682839, lng: 139.759455 };
  options: google.maps.MapOptions = {
    zoomControl: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    backgroundColor: 'transparent',
    center: { lat: 35.682839, lng: 139.759455  },
    zoom: 12,
    styles: [
      {
        featureType: "all",
        stylers: [
          { saturation: -80 }
        ]
      }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          { hue: "#6f6f6f" },
          { saturation: 50 }
        ]
      }, {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]
  };

  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        name: "basic",
        data: [400, 430, 448, 800, 540, 580, 690, 1100, 1200, 1380],
        color: "#6f6f6f"
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
  constructor(){ }
}
