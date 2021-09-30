<!--File		: search_book.php
	Deskripsi	: menampilkan data buku -->

<?php include('./header.html') ?>

<div class="container">
  <br>
  <div class="card">
    <div class="card-header">Search Book Data</div>
    <div class="card-body">
      <form onsubmit="return false">
        <input type="text" name="book" id="book" class="form-control mb-1" placeholder="Cari berdasarkan judul buku.." onchange="showBook(this.value)">
        <button type="button" class="btn btn-primary w-100">Submit</button>
      </form>
      <br>
      <div id="detail_book"></div>
    </div>
  </div>
</div>

<?php include('./footer.html') ?>