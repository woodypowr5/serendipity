import { Component, OnInit } from '@angular/core';
import { Selection } from '../../shared/types/selection.model';

@Component({
  selector: 'app-configured-image',
  templateUrl: './configured-image.component.html',
  styleUrls: ['./configured-image.component.css']
})
export class ConfiguredImageComponent implements OnInit {
  private selections: Selection[] = [];
  private svgAttributes: any = {
    color: "black",
    bezelWidth: "4px",
    radius: "15px",
    width: "150px",
    height: "300px"
  }

  constructor(){ }

  ngOnInit(){ }

  selectionsChanged(selections: Selection[]) {
    this.selections = selections;
    this.recomputeSvgAttributes(this.selections);
  }

  recomputeSvgAttributes(selections: Selection[]): void {
    this.selections.map(selection => {
      const name = selection.attributeName;
      const value = selection.value
      if (name === 'material') {
        if (value === 'plastic') {
          this.svgAttributes.material = "";
        } else if (value === 'metal') {

        } else if (value === 'wood') {

        } else if (value === 'leather') {

        }
      }
      else if (name === 'bezelWidth') {
        if (value === 'none') {
          this.svgAttributes.bezelWidth = "1px";
        } else if (value === '2mm') {
          this.svgAttributes.bezelWidth = "2px";
        } else if (value === '4mm') {
          this.svgAttributes.bezelWidth = "4px";
        } else if (value === '6mm') {
          this.svgAttributes.bezelWidth = "6px";
        } else if (value === '8mm') {
          this.svgAttributes.bezelWidth = "8px";
        } 
      }
      else if (name === 'device') {
        if (value === 'iPhone') {
          this.svgAttributes.radius = "15px";
        } else if (value === 'Android') {
          this.svgAttributes.radius = "0px";
        } 
      }
    });
  }

}
