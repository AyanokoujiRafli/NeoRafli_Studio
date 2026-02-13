let jasaDipilih = "";
let hargaDipilih = "";

function pilihJasa(jasa, harga) {
    jasaDipilih = jasa;
    hargaDipilih = harga;
    alert(`Dipilih: ${jasa} - Rp ${harga}`);
}

function kirimWA() {
    const nama = document.getElementById("nama").value;
    const catatan = document.getElementById("catatan").value;

    const nomorWA = "6287875164038";

    const pesan = 
`Halo Admin Rafli Digital Service 👋
Nama: ${nama}
Pesanan: ${jasaDipilih}
Harga: Rp ${hargaDipilih}
Catatan: ${catatan}`;

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}
