import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as deepar from 'deepar';

@Component({
  selector: 'app-deepar',
  templateUrl: './deepar.component.html',
  styleUrls: ['./deepar.component.scss']
})
export class DeepARComponent implements AfterViewInit {

  @ViewChild('deeparCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  private deepAR: any;

  ngAfterViewInit() {
    (async () => {
      const canvas = this.canvas.nativeElement;
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * pixelRatio;
      canvas.height = canvas.clientHeight * pixelRatio;

      this.deepAR = await deepar.initialize({
        licenseKey: 'your_license_key_here',
        canvas,
        effect: 'https://cdn.jsdelivr.net/npm/deepar/effects/aviators'
      });
    })();
  }
}
