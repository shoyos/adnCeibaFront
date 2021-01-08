export interface Publicacion{
    //Propiedades de automoviles
    placa : string;
    numeroMotor : string;
    kilometraje : number;
    cilindraje : number;
    fechaVencimientoSoat : Date;
    modelo : number;
    valorVenta : number;
    valorVentaCalculado : number;
    // Propiedades de publicacion
    id : number;
    idTipoPublicacion : number;
    fechaInicio : Date;
    fechaFinal : Date;
    precioPublicacion : number;

}