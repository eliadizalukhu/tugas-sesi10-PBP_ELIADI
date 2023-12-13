const { response } = require("express");

const updateData = {
  nim: "1102025",
  nama: "Eliadi zalukhu",
  gender: "L",
  prodi: "TI",
  alamat: "Cibolang",
};

fetch(`http://localhost:3000/mahasiswa2/${updateData.nim}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error : ", err));
