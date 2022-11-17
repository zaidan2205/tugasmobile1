import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";


@Component({
  selector: 'app-barang-edit',
  templateUrl: './barang-edit.page.html',
  styleUrls: ['./barang-edit.page.scss'],
})
export class BarangEditPage implements OnInit {
  id: any;
  namabarang: any;
  jumlah: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.ambilBarang(this.id);
    })
  }

  ngOnInit() {
  }


  ambilBarang(id) {
    this._apiService.ambilBarang(id).subscribe((res: any) => {
      console.log('sukses', res);
      let barang = res;
      //console.log(barang);
      this.namabarang = barang.namabarang;
      this.jumlah = barang.jumlah;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }


  editBarang() {
    let url = this._apiService.apiURL() + "/edit.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        id: this.id,
        namabarang: this.namabarang,
        jumlah: this.jumlah,
      },
    }).then((data) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Edit Data Barang',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/barang');
    }, (err) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Edit Data Barang',
        buttons: ['OK']
      }).then(res => {
        res.present()
      });
    })
  }

}
