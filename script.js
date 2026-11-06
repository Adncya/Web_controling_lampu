const bohlam = document.getElementById("on_off1");
const bohlam2 = document.getElementById("on_off2");
const bohlam3 = document.getElementById("on_off3");
const on_off = document.querySelector(".on_off");
const ldr = document.querySelector(".btn_otomisasi");

const gambar = document.getElementById("lamppp1");
const gambar2 = document.getElementById("lamppp2");
const gambar3 = document.getElementById("lamppp3");

const status2 = document.querySelector(".status");

let ask = Number(prompt("Masukan alamat ip mikro kontoler anda"));
if (ask !== NaN && ask !== 0) {
  const fix = "http://192.168.1.9/";
  alert("Alamat ip anda = " + ask);
  status2.textContent = "Terhubung";
  bohlam.addEventListener("click", function () {
    if (bohlam.textContent == "OFF") {
      bohlam.style.backgroundColor = "#59CE8F";
      fetch(fix)
        .then(function (response) {
          return response.text();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.error("Terjadi error saat fetch data:", error);
        });
      bohlam.textContent = "ON";
      gambar.style.opacity = 1;
    } else if (bohlam.textContent == "ON") {
      bohlam.textContent = "OFF";
      gambar.style.opacity = 0.5;
      bohlam.style.backgroundColor = "#FF1E00";
      fetch(fix + "off")
        .then(function (response) {
          return response.text();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.error("Terjadi error saat fetch data:", error);
        });
    }
  });
  bohlam2.addEventListener("click", function () {
    if (bohlam2.textContent == "OFF") {
      bohlam2.style.backgroundColor = "#59CE8F";
      fetch(fix)
        .then(function (response) {
          return response.text();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.error("Terjadi error saat fetch data:", error);
        });
      bohlam2.textContent = "ON";
      gambar2.style.opacity = 1;
    } else if (bohlam2.textContent == "ON") {
      bohlam2.textContent = "OFF";
      gambar2.style.opacity = 0.5;
      bohlam2.style.backgroundColor = "#FF1E00";
      fetch(fix + "off")
        .then(function (response) {
          return response.text();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.error("Terjadi error saat fetch data:", error);
        });
    }
  });
  bohlam3.addEventListener("click", function () {
    if (bohlam3.textContent == "OFF") {
      bohlam3.style.backgroundColor = "#59CE8F";
      fetch(fix)
        .then(function (response) {
          return response.text();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.error("Terjadi error saat fetch data:", error);
        });
      bohlam3.textContent = "ON";
      gambar3.style.opacity = 1;
    } else if (bohlam3.textContent == "ON") {
      bohlam3.textContent = "OFF";
      gambar3.style.opacity = 0.5;
      bohlam3.style.backgroundColor = "#FF1E00";
      fetch(fix + "off")
        .then(function (response) {
          return response.text();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.error("Terjadi error saat fetch data:", error);
        });
    }
  });
} else {
  alert("Data yang anda masukan tidak valid");
  bohlam.addEventListener("click", function () {
    alert("Anda harus terhubung terhadap ip untuk mengakses fitur ini");
  });
  bohlam2.addEventListener("click", function () {
    alert("Anda harus terhubung terhadap ip untuk mengakses fitur ini");
  });
  bohlam3.addEventListener("click", function () {
    alert("Anda harus terhubung terhadap ip untuk mengakses fitur ini");
  });
  ldr.addEventListener("click", function () {
    alert("Anda harus terhubung terhadap ip untuk mengakses fitur ini");
  });
}
