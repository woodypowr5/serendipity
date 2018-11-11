import { Injectable } from '@angular/core';
import { Attribute } from '../types/attribute.model';
import { Constants } from '../data/constants';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable()
export class AttributeService {
  private attributes: Attribute[] = [];
  attributesChanged: BehaviorSubject<Attribute[]> = new BehaviorSubject([]);

  constructor() { 
    this.attributesChanged.subscribe(attributes => {
      this.attributes = attributes;
    }); 
    this.attributesChanged.next(Constants.attributes);
  }
}
