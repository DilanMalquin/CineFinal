import { Butaca } from "./butaca";

export interface Butacas {
  disponibles : Array<Butaca>
  ocupadas : Array<Butaca>
  numeroFilas : number;
  numeroColumnas : number;
}
