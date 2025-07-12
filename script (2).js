// Untuk badge keranjang
function updateCartCount() {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  let count = keranjang.length;
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

// Tambah ke keranjang
function tambahKeKeranjang(namaProduk) {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  keranjang.push(namaProduk);
  localStorage.setItem('keranjang', JSON.stringify(keranjang));
  updateCartCount();
  alert(`${namaProduk} ditambahkan ke keranjang!`);
}

// Tampilkan keranjang
window.onload = function() {
  updateCartCount();
  const daftar = document.getElementById('daftar-keranjang');
  if (daftar) {
    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    if (keranjang.length === 0) {
      daftar.innerHTML = "<p>Keranjang kosong.</p>";
      const btn = document.getElementById('checkout-btn');
      if (btn) btn.style.display = 'none';
    } else {
      keranjang.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        daftar.appendChild(li);
      });
    }
  }
};

// Checkout
function checkout() {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  alert("Terima kasih! Pesanan Anda berhasil diproses.");
  localStorage.removeItem('keranjang');
  location.reload();
}

// Form kontak
function kirimPesan(event) {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  alert(`Terima kasih, ${nama}! Pesan Anda terkirim.\nEmail: ${email}\nPesan: ${pesan}`);
  document.getElementById('kontak-form').reset();
}