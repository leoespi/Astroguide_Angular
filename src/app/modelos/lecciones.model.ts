export class Lecciones {

    id?: number;
    Nombre_de_la_leccion: string | undefined;
    Contenido: string  | undefined;
    Tipo_de_leccion: string  | undefined;

    constructor(Nombre_de_la_leccion: string,Contenido: string,Tipo_de_leccion: string,
        id?: number
      ) {
        
        this.id = id;
        this.Nombre_de_la_leccion = Nombre_de_la_leccion;
        this.Contenido = Contenido;
        this.Tipo_de_leccion = Tipo_de_leccion;
      }



    
}
