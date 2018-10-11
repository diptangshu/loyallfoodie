import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'points-display',
  templateUrl: 'points-display.html'
})
export class PointsDisplayComponent implements OnInit {

  @Input() target: number;
  @Input() current: number = 0;
  @Input() tier: number = 0;

  semicircle = false;
  radius = 80;  
  tiers = [
    { name: 'bronze', color: '#cd7f32' },
    { name: 'silver', color: '#c0c0c0' },
    { name: 'gold', color: '#ffd700' },
  ];

  tierName: string;
  tierColor: string;

  ngOnInit() {
    this.tierName = this.tiers[this.tier].name;
    this.tierColor = this.tiers[this.tier].color;
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }

}
