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
    style: "backCover",
    bezelWidth: "1px",
    background: "none",
    radius: "15px",
    width: "150px",
    height: "300px",
    fill: "none",
    innerMaterial: 'leather',
    backgroundImage: "/assets/leather3.png",
    containerWidth: 300,
    containerHeight: 350,
    ccPockets: 'no',
    device: 'iPhone'
  }
  private embosserActive = false;
  private embosserText = "";
  
  constructor(){ }

  ngOnInit(){ }

  selectionsChanged(selections: Selection[]) {
    this.selections = selections;
    this.recomputeSvgAttributes(this.selections);
  }
  
  recomputeSvgAttributes(selections: Selection[]): void {
    this.selections.map(selection => {
      const name = selection.attributeName;
      const value = selection.value;
      if (name === 'material') {
        if (value === 'leather') {
          this.svgAttributes.fill = "url(/assets/leather3.png)";
          this.svgAttributes.backgroundImage = "url(/assets/leather3.png)";
        } else if (value === 'crocodile') {

        } else if (value === 'ostrich') {

        } else if (value === 'cobra') {

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
          this.svgAttributes.device = 'iPhone';
          this.svgAttributes.radius = "15px";
          this.svgAttributes.width = "150px",
          this.svgAttributes.height = "300px"
        } else if (value === 'Android') {
          this.svgAttributes.device = 'Android';
          this.svgAttributes.radius = "0px";
          this.svgAttributes.width = "150px",
          this.svgAttributes.height = "300px"
        } else if (value === 'iPad') {
          this.svgAttributes.device = 'iPad';
          this.svgAttributes.radius = "15px";
          this.svgAttributes.width = "250px",
          this.svgAttributes.height = "300px"
        }
      }
      else if (name === 'color') {
        if (value === 'brown') {
          this.svgAttributes.fill = "brown";
        } else if (value === 'tan') {
          this.svgAttributes.fill = "#F8B195";
        } else if (value === 'white') {
          this.svgAttributes.fill = "#FFFFFF";
        } else if (value === 'gold') {
          this.svgAttributes.fill = "#B0782C";
        } else if (value === 'red') {
          this.svgAttributes.fill = "#5A1917";
        } else if (value === 'green') {
          this.svgAttributes.fill = "#214A36";
        } 
      }
      if (name === 'style') {
        if (value === 'backCover') {
          this.svgAttributes.style = "backCover";

        } else if (value === 'bookcase') {
          this.svgAttributes.style = "bookcase";
        }
        this.svgAttributes.containerWidth = this.findContainerWidth();
        console.log(this.svgAttributes.containerWidth);
      }  
      if (name === 'ccPockets') {
        if (value === 'yes') {
          this.svgAttributes.ccPockets = "yes";
        } else if (value === 'no') {
          this.svgAttributes.ccPockets = "no";
        }
      }  
      if (name === 'embossing') {
        if (value === 'yes') {
          this.embosserActive = true;
        } else {
          this.embosserActive = false
        }
      }
    });
  }

  findContainerWidth(): number {
    if (this.svgAttributes.device === 'iPhone' || this.svgAttributes.device === 'Android') {
      if (this.svgAttributes.style === 'backCover') {
        return 300;
      } else if (this.svgAttributes.style === 'bookcase') {
        return 500;
      } 
    } else if (this.svgAttributes.device === 'iPad') {
      if (this.svgAttributes.style === 'backCover') {
        return  400;
      } else if (this.svgAttributes.style === 'bookcase') {
        return 600;
      } 
    }
  }


}
