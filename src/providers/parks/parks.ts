import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';


export interface ParkProperties {
  name: string;
  www: string;
  infrastruktur: string;
}

export interface Park {
  properties: ParkProperties
}

export interface ParkList {
  name: string;
  features: Park[];
}

@Injectable()
export class ParksProvider {

  constructor(private httpClient: HttpClient) {

  }

  getList(): Observable<Object> {
    const params: HttpParams = new HttpParams();

    // Local: 'http://localhost:8100/dataset/park/resource/570b4622-eb7a-4ad3-8b4f-028d30b6cb8c/download/park.json'
    // Prod: 'https://data.stadt-zuerich.ch/dataset/park/resource/570b4622-eb7a-4ad3-8b4f-028d30b6cb8c/download/park.json'

    return this.httpClient.get('https://data.stadt-zuerich.ch/dataset/park/resource/570b4622-eb7a-4ad3-8b4f-028d30b6cb8c/download/park.json', {params: params});
  }

}
