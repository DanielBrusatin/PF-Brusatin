const input = document.querySelector("#adjunto");
const preview = document.querySelector(".preview");

input.style.opacity = 0;

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "Ajunta tus imagenes...";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      para.textContent = `${file.name}, tamaño ${returnFileSize(file.size)}.`;
      const image = document.createElement("img");
      image.src = URL.createObjectURL(file);
      listItem.appendChild(image);
      listItem.appendChild(para);
      list.appendChild(listItem);
    }
  }
}


function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}