import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";
import {PdfViewerComponent} from "../pdf-viewer/pdf-viewer.component";
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

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
export class InformationProductComponent implements OnChanges{
  modalButtonHtml: SafeHtml;
  sanitizerSafe: DomSanitizer;
  @Input() position = { lat: 35.682839, lng: 139.759455  };
  modalRef: MdbModalRef<PdfViewerComponent> | null = null;
  marker = {
    position: this.position,
  }
  center: google.maps.LatLngLiteral = this.position;
  options: google.maps.MapOptions = {
    zoomControl: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    backgroundColor: 'transparent',
    center: this.position,
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

  openModal() {
    this.modalRef = this.modalService.open(PdfViewerComponent, {
      modalClass: 'modal-xl',
    });
  }

  constructor(private modalService: MdbModalService, private sanitizer: DomSanitizer) {
    this.modalButtonHtml = this.sanitizer.bypassSecurityTrustHtml(
      `<a class="btn btn-primary" (click)="openModal()">Open modal</a>`
    );
    this.sanitizerSafe = sanitizer;
  }

  ngOnChanges(changes: SimpleChanges) {
    // Detecta cambios en la propiedad 'position'
    if (changes["position"] && changes["position"].currentValue) {
      // Actualiza 'marker' y 'center' con el nuevo valor de 'position'
      this.marker = {
        position: this.position,
      }
      this.options.center = this.position;
      this.center = this.position;
    }
  }
}
