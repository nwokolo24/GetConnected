import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;

  // This service helps with delays by show some form of waiting for updates to take place
  constructor(private spinnerService: NgxSpinnerService) { }
  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgb(255,255,255,0)',
      color: '#333333'
    });
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
