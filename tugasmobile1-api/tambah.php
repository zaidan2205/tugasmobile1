<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$id = trim($data['id']);
$namabarang = trim($data['namabarang']);
$jumlah = trim($data['jumlah']);

if ($id != '' and $namabarang != '' and $jumlah != '') {
	$query = mysqli_query($koneksi,"insert into barang(id,namabarang,jumlah) values('$id','$namabarang','$jumlah')");

}else{
	$query = mysqli_query($koneksi,"delete from barang where id='$id'");
}


// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';
// }

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>