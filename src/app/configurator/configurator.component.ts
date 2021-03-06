import { Component, OnInit, ViewChild } from '@angular/core';
import { AttributeService } from '../shared/services/attribute.service';
import { Attribute } from '../shared/types/attribute.model';
import { Option } from '../shared/types/option.model';
import { Selection } from '../shared/types/selection.model';
import { ImageService } from '../shared/services/image.service';
import { BehaviorSubject } from 'rxjs';
import { ConfiguredImageComponent } from './configured-image/configured-image.component';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  private attributes: Attribute[] = [];
  private activeAttribute: Attribute;
  private activeOption: Option;
  private selections: Selection[] = [];
  private imageSrc: string;
  @ViewChild(ConfiguredImageComponent) child:ConfiguredImageComponent;

  constructor(private attributeService: AttributeService, private imageService: ImageService) { }

  ngOnInit() {
    
    this.attributeService.attributesChanged.subscribe(attributes => {
      this.attributes = attributes;
      this.attributes.map(attribute => {
        const newSelection: Selection = {
          attributeName: attribute.name,
          value: attribute.options[0].name
        }
        this.selections.push(newSelection);
      });
      this.activeAttribute = this.attributes[0];
      this.activeOption = this.activeAttribute.options[0];
    }); 
  }

  setSelections(attribute: Attribute, option: Option) {
    this.selections.map(selection => {
      if (selection.attributeName === attribute.name) {
        selection.value = option.name;
      }
    });
    this.child.selectionsChanged(this.selections);
  }

  getSelectionValue(attributeName: string) {
   return this.selections.filter(selection => selection.attributeName === attributeName)[0].value;
  }

  setActiveAttribute(attribute: Attribute): void {
    this.activeAttribute = attribute;
    this.activeOption.name = this.getSelectionValue(attribute.name);
    this.imageSrc = this.imageService.getImage(this.selections);
    // this.child.selectionsChanged(this.selections);
  }

  setActiveOption(option: Option): void {
    this.activeOption = option;
    this.setSelections(this.activeAttribute, option);
  }

  next() {
    for (let i = 0; i < this.attributes.length; i++) {
      const attribute = this.attributes[i];
      if (attribute.name === this.activeAttribute.name) {
        this.activeAttribute = this.attributes[i + 1];
        break; 
      }
    }
  }
}