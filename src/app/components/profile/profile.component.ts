import { Component,HostBinding }          from '@angular/core';
import { slideInDownAnimation } from '../../app-animations';

@Component({
  templateUrl: 'profile.component.html',
  animations:[slideInDownAnimation]
})
export class ProfileComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
}