let todoName = document.getElementById("todo-name");
let btnSimpan = document.getElementById("btn-simpan");

btnSimpan.addEventListener("click", function () {
  // Pengkondisian
  if (todoName.value == "") {
    alert("Nama Kegiatan Harus Di isii !!! ");
  } else {
    let todoContainer = document.querySelector(".list-group");
    let todoHTML = todoContainer.innerHTML;

    todoHTML += `<li class="list-group-item d-flex justify-content-between">
                      <div>
                             <input class="form-check-input me-1" type="checkbox">
                             <span>${todoName.value}</span>
                      </div>
                      <button class = "badge  border-0 bg-danger btn-hapus">x</button>
                    </li>`;
    todoContainer.innerHTML = todoHTML;
    todoName.value = "";
    todoName.focus(); // supaya setelah selesai di input , langsung ke inputan lagi

    let check = document.querySelectorAll(".form-check-input");

    //   perulangan untuk menambahkan  todo
    for (let i = 0; i < check.length; i++) {
      const input = check[i];
      input.addEventListener("change", function () {
        let todoSpan = input.nextElementSibling;
        todoSpan.classList.toggle("text-decoration-line-through");
      });
    }

    let btnHapus = document.querySelectorAll(".btn-hapus");

    // perulangan untuk menghapus todo
    for (let x = 0; x < btnHapus.length; x++) {
      const hapus = btnHapus[x];

      hapus.addEventListener("click", function () {
        hapus.parentElement.remove();
      });
    }
  }
});
