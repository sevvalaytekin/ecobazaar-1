import "./Example.css";

const Example = () => {
  const ExampleSection = document.createElement("div");
  ExampleSection.classList.add("example-section");

  ExampleSection.innerHTML = `
    <h2>Örnek Başlık</h2>
    <p>Bu bir örnek bileşendir. JavaScript ile DOM üzerinden oluşturulmuştur.</p>
    <button class="example-button">Tıklayınız</button>
  `;

  ExampleSection.querySelector(".example-button").addEventListener("click", () => {
    alert("Butona tıkladınız!");
  });

  return ExampleSection;
};

export default Example;
