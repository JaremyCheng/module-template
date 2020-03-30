// import { isEmpty, forIn, cloneDeep, clone } from 'lodash-es';

// export function exoCloneDeep(obj: object) {
//   return cloneDeep(obj);
// }
export function say() {
  console.log('HelloWorld');
}
export class Animal {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}
