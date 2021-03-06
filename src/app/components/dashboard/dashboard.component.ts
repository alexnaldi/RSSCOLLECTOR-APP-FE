import { Component,HostBinding }          from '@angular/core';
import { slideInDownAnimation } from '../../app-animations';

@Component({
  templateUrl: 'dashboard.component.html',
  animations:[slideInDownAnimation]
})
export class DashboardComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
}