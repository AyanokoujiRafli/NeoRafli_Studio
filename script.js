let jasaDipilih = "";
let hargaDipilih = "";

function pilihJasa(jasa, harga) {
    jasaDipilih = jasa;
    hargaDipilih = harga;
    alert(`Dipilih: ${jasa} - Rp ${harga}`);
}

function kirimWA() {
  const nama = document.getElementById("nama").value.trim();
  const catatan = document.getElementById("catatan").value.trim();

  if(!nama || !jasaDipilih){
    alert("Isi nama dan pilih jasa dulu ya 🙂");
    return;
  }

  const nomorWA = "6287875164038";
  const pesan =
`Halo Admin *Neo Rafli Studio* 👋
Nama: ${nama}
Pesanan: ${jasaDipilih}
Harga: Rp ${hargaDipilih}
Catatan: ${catatan || '-'}

Mohon info proses & estimasi pengerjaan. Terima kasih 🙏`;

  window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, "_blank");
}

