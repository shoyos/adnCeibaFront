import { by, element } from "protractor";

export class AsesoriaPage {

    public crearAsesoria = element(by.id('btn-addAsesoria'));
    public idInputDocumentoAsesor = element(by.id('idInputDocumentoAsesor'));
    public idInputFechaAsesoria = element(by.id('idInputFechaAsesoria'));
    public idInputFranjaHoraria = element(by.id('idInputFranjaHoraria'));
    public idInputNombreCliente = element(by.id('idInputNombreCliente'));
    public idInputTelefonoCliente = element(by.id('idInputTelefonoCliente'));

    async clickBtnCrearAsesoria() {
        await this.crearAsesoria.click();
    }

    async ingresarIdAsesor(idAsesor : string) {
        await this.idInputDocumentoAsesor.sendKeys(idAsesor);
    }

    async ingresarFecha(fecha : any) {
        await this.idInputFechaAsesoria.sendKeys(fecha);
    }

    async ingresarFranja(franja : any) {
        await this.idInputFranjaHoraria.sendKeys(franja);
    }

    async ingresarNombreCliente(nombre : any) {
        await this.idInputNombreCliente.sendKeys(nombre);
    }

    async ingresarTelefonoCliente(telefono : any) {
        await this.idInputTelefonoCliente.sendKeys(telefono);
    }

}