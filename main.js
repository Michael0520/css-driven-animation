import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  // 指定要生成的 section 數量和每個 section 中的圖片數量
  const numSections = 3;
  const numImagesPerSection = 10;

  // 獲取 main 元素
  const mainElement = document.querySelector("main");

  // 循環生成 section 和 img
  let imageId = 10; // 初始的圖片 ID
  for (let i = 0; i < numSections; i++) {
    const sectionElement = document.createElement("section");
    for (let j = 0; j < numImagesPerSection; j++) {
      const imgElement = document.createElement("img");
      imgElement.src = `https://picsum.photos/id/${imageId}/800/800`;
      imgElement.alt = "Sample Image";
      sectionElement.appendChild(imgElement);
      imageId++;
    }
    mainElement.appendChild(sectionElement);
  }
});
