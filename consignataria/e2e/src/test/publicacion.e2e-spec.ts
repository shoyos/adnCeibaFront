import { browser, by, element } from "protractor";
import { AppPage } from "../app.po";
import { PublicacionPage } from "../page/publicacion/publicacion.po";

describe('agregr nueva publicacion', () => {
    let page : AppPage;
    let publicacion : PublicacionPage;

    beforeEach ( () => {
      page = new AppPage();
      publicacion = new PublicacionPage();
    });

    it('Crear publicacion', ()  => {
      const placa = 'AA1';
      const numeroMotor = 'QWE123';
      const kilometraje = "1500";
      const cilindraje = "1500" ;
      const fechaVencimientoSoat = '2020-01-01';
      const modelo = "2019" ;
      const valorVenta = "56000" ;
      const idTipoPublicacion = "1" ;
      const fechaInicio = '2021-01-01';

      page.navigateTo();
      publicacion.clickBtnCrearPublicacion();

      publicacion.ingresarPlaca(placa);
      publicacion.ingresarNumMotor(numeroMotor);
      publicacion.ingresarKilometraje(kilometraje);
      publicacion.ingresarCilindraje(cilindraje);
      publicacion.ingresarFechaSoat(fechaVencimientoSoat);
      publicacion.ingresarModelo(modelo);
      publicacion.ingresarValorVenta(valorVenta);
      publicacion.ingresarTipoPublicacion(idTipoPublicacion);
      publicacion.ingresarFechaInicio(fechaInicio);
      
      publicacion.getIdPlaca().then( (value) => {
        expect(value).toEqual(placa);
      });



      /*
      expect(publicacion.idInputNumMotor.getAttribute('value').toString()).toEqual(numeroMotor);
      expect(publicacion.idInputKilometraje.getAttribute('value').toString()).toEqual(kilometraje);
      expect(publicacion.idInputCilindraje.getAttribute('value').toString()).toEqual(cilindraje);
      expect(publicacion.idInputFechaSoat.getAttribute('value').toString()).toEqual(fechaVencimientoSoat);
      expect(publicacion.idInputModelo.getAttribute('value').toString()).toEqual(modelo);
      expect(publicacion.idInputValorVenta.getAttribute('value').toString()).toEqual(valorVenta);
      expect(publicacion.idInputIdTipoPublicacion.getAttribute('value').toString()).toEqual(idTipoPublicacion);
      expect(publicacion.idInputFechaInicio.getAttribute('value').toString()).toEqual(fechaInicio);
      */

    });

    it('Eliminar publicacion', ()  => { 
      
      page.navigateTo();
      publicacion.clickBtnEliminarPublicacion();
    });



});