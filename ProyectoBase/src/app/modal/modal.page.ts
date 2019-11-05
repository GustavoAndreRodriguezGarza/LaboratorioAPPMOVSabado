import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CuentaPage } from '../cuenta/cuenta.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  constructor(private modalCtrl: ModalController) {

  }



  ngOnInit() {
  }

  Nombre: string;
  Cantidad: number;


  async subirCuenta() {
    var data: any = [];
    data ={Cantidad: this.Cantidad, Nombre: this.Nombre};
    this.modalCtrl.dismiss(data);
  }

  async salirModal() {
    this.modalCtrl.dismiss();
  }
}