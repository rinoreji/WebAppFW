import { Component } from '@angular/core';
import { WeatherForecastClient, WeatherForecast } from '../web-api.g';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

	constructor(client: WeatherForecastClient) {
  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
		client.get().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}
