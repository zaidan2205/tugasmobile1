import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-barang-tambah',
  templateUrl: './barang-tambah.page.html',
  styleUrls: ['./barang-tambah.page.scss'],
})
export class BarangTambahPage implements OnInit {
  id: any;
  jumlah: any;
  namabarang: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,

  ) { }

  ngOnInit() {
  }

  addBarang() {
    let url = this._apiService.apiURL() + "/tambah.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id: this.id,
        namabarang: this.namabarang,
        jumlah: this.jumlah
      },
    }).then((data) => {
      this.id = '';
      this.namabarang = '';
      this.jumlah = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Barang',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/barang');
    }, (error) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Barang',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
