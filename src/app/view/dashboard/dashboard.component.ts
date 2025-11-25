import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 

interface VehicleModel {
  id: string;
  model: string;
  image: string;
}

interface FullVehicleDetails {
  id: string;
  model: string;
  image: string;
  sales: number;
  connected: number;
  softwareUpdated: number;
  vehicleCode: string;
  data: any;
}

interface VehicleTableData {
  model: string;
  vehicleCode: string;
  data: {
    speed: string;
    fuelLevel: string;
    tirePressure: string;
    engineTemp: string;
    oilLife: string;
  };
}


@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [
    CommonModule,     
    HttpClientModule,
    FormsModule      
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent implements OnInit { 

  searchModelTerm: string = '';
  availableVehicles: VehicleModel[] = []; 
  selectedVehicleModelId: string | null = null;

  totalSales: number | null = 150000; 
  connectedVehicles: number | null = 120000;
  updatedSoftwareVehicles: number | null = 110000;
  selectedVehicleImage: string | null = 'https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/focus/2018/collections/gallery/01_2018_fcs_s_01_hero_ford_focus.tif?$MB_HD_VDP$&fmt=webp'; 

  searchCodeTerm: string = '';
  vehicleData: VehicleTableData | null = {
    model: 'Ford Focus',
    vehicleCode: '2FRHDUYS2Y63NHD22454',
    data: {
      speed: '120 km/h',
      fuelLevel: '75%',
      tirePressure: '32 PSI',
      engineTemp: '90°C',
      oilLife: '80%'
    }
  }; 
  searched: boolean = false;

  constructor(private http: HttpClient) { } 

  ngOnInit(): void {
  }

  searchVehicleModels(): void {
    console.log('Buscando modelos para:', this.searchModelTerm);
    this.availableVehicles = [{ id: '1', model: 'Ford Focus', image: '...' }];
  }

  selectVehicleModel(): void {
    console.log('Modelo selecionado:', this.selectedVehicleModelId);
    if (this.selectedVehicleModelId === '1') {
      this.selectedVehicleImage = 'https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/focus/2018/collections/gallery/01_2018_fcs_s_01_hero_ford_focus.tif?$MB_HD_VDP$&fmt=webp';
      this.totalSales = 150000;
      this.connectedVehicles = 120000;
      this.updatedSoftwareVehicles = 110000;
    } else {
      this.clearVehicleDetails();
    }
  }

  clearVehicleDetails(): void {
    this.selectedVehicleImage = null;
    this.totalSales = null;
    this.connectedVehicles = null;
    this.updatedSoftwareVehicles = null;
  }

  searchVehicleData(): void {
    console.log('Buscando dados para código:', this.searchCodeTerm);
    this.searched = true;
    if (this.searchCodeTerm === '2FRHDUYS2Y63NHD22454') {
      this.vehicleData = {
        model: 'Ford Focus',
        vehicleCode: '2FRHDUYS2Y63NHD22454',
        data: {
          speed: '120 km/h', fuelLevel: '75%', tirePressure: '32 PSI',
          engineTemp: '90°C', oilLife: '80%'
        }
      };
    } else {
      this.vehicleData = null;
    }
  }
}