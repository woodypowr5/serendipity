import { Injectable } from '@angular/core';
import { Selection } from '../types/selection.model';

@Injectable()
export class ImageService {

  constructor() { }

  getImage(selections: Selection[]): string {
    return 'https://picsum.photos/200/300';
  }
}
