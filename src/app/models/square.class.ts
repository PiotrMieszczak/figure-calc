import { Rectangle } from './rectangle.class';

class Square extends Rectangle {

  constructor(private _edge: number, public fields: string[]) {
    super(_edge, _edge, fields);
  }
}
