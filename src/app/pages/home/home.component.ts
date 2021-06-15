import { Component, OnInit } from '@angular/core';
import { GoogleAnaliticsService } from 'src/app/shared/services/google-analitics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private googleAnaliticService: GoogleAnaliticsService
  ) { }

  ngOnInit() {
  }

  paySomeShit(eventName): void {
    const eventName: 'eventName';
    const eventCategory: 
    const eventAction: 
    const eventLabel: 
    const eventValue: 

    this.googleAnaliticService.eventEmitter(eventName)
  }

}
