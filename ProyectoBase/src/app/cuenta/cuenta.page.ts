import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  public cuentas;
  Cantidad: number;
  Nombre: String;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cuentas = [
      { Cantidad: 1555.00, Nombre: 'Crédito Banorte' },
      { Cantidad: 1.50, Nombre: 'Débito Banregio' },
      { Cantidad: -1555.00, Nombre: 'Crédito BBVA' },
      { Cantidad: 500.00, Nombre: 'Débito Banamex' },
    ];


  }

  agregarArregloCuenta(Cantidad, Nombre) {
    this.cuentas.push(Cantidad, Nombre);
  }

  async abrirModal() {

    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {Cantidad: null, Nombre: null},
    });

    modal.onDidDismiss().then((data) => {
      if(data['data'] != null){
        this.cuentas.push(data['data']);
      }
      
    });


    return await modal.present();
  }


}
