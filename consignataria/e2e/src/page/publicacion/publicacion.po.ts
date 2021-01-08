import { by, element } from "protractor";


export class PublicacionPage {
    public crearPublicacion = element(by.id('btn-addPublicacion'));
    public eliminarPublicacion = element(by.id('btn-eliminarPublicacion'));

    /** inputs form crear publicacion */
    public idInputPlaca = element(by.id('idInputPlaca'));
    public idInputNumMotor = element(by.id('idInputNumMotor'));
    public idInputKilometraje = element(by.id('idInputKilometraje'));
    public idInputCilindraje = element(by.id('idInputCilindraje'));
    public idInputFechaSoat = element(by.id('idInputFechaSoat'));
    public idInputModelo = element(by.id('idInputModelo'));
    public idInputValorVenta = element(by.id('idInputValorVenta'));
    public idInputIdTipoPublicacion = element(by.id('idInputIdTipoPublicacion'));
    public idInputFechaInicio = element(by.id('idInputFechaInicio'));

     getIdPlaca(){
        return this.idInputPlaca.getText() as Promise<string>;
    }

    async clickBtnCrearPublicacion() {
        await this.crearPublicacion.click();
    }

    async clickBtnEliminarPublicacion() {
        await this.eliminarPublicacion.click();
    }

    async ingresarPlaca(placa : any) {
        await this.idInputPlaca.sendKeys(placa);
    }

    async ingresarNumMotor(numMotor : any) {
        await this.idInputNumMotor.sendKeys(numMotor);
    }

    async ingresarKilometraje(kilometraje : any) {
        await this.idInputKilometraje.sendKeys(kilometraje);
    }

    async ingresarCilindraje(cilindraje : any) {
        await this.idInputCilindraje.sendKeys(cilindraje);
    }

    async ingresarFechaSoat(fechaSoat : any) {
        await this.idInputFechaSoat.sendKeys(fechaSoat);
    }

    async ingresarModelo(modelo : any) {
        await this.idInputModelo.sendKeys(modelo);
    }

    async ingresarValorVenta(valorVenta : any) {
        await this.idInputValorVenta.sendKeys(valorVenta);
    }

    async ingresarTipoPublicacion(idTipoPublicacion : any) {
        await this.idInputIdTipoPublicacion.sendKeys(idTipoPublicacion);
    }

    async ingresarFechaInicio(idInputFechaInicio : any) {
        await this.idInputIdTipoPublicacion.sendKeys(idInputFechaInicio);
    }

}