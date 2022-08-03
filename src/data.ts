export interface Data {
  name: string;
  nacimiento: {
    dia: number;
    mes: number;
    anio: number;
  };
  github: string;
  linkedin: string;
  cel: string;
  mail: string;
  edad: string;
  puesto:string;
  education: [];
  ubicacion: string;
  about: string;
  skills: {};
  exp: [{}, {}, {}];
}
