const submitOne = document.getElementById("submit-text");
const resultText = document.getElementById("result-text");
const Breeds = document.getElementById("Breeds");
const img = document.getElementById("IMG");

const getFact = async () => {
  const res = await axios.get("https://catfact.ninja/fact");
  return res;
};
const setFact = async () => {
  resultText.innerHTML = "";
  try {
    const res = await getFact();
    resultText.innerHTML = `
      <p style="font-size: 22px; line-height: 33px" class="text-center">${res.data.fact}</p>`;
    console.log(res);
  } catch (error) {
    resultText.innerHTML = "Error '404'";
  }
};

const SubmitOne = () => {
  setFact();
};

const getBreeds = async () => {
  const res = await axios.get("https://catfact.ninja/breeds");
  return res;
};
const setBreeds = async () => {
  try {
    const res = await getBreeds();
    res.data.data.map((item) => {
      Breeds.innerHTML += `
        <div class="col-md-6  col-xl-4 p-4">
            <div class="card p-4 tomato">
              <p class="fs-6">Breed: ${item.breed}</p>
              <p class="fs-6">Country: ${item.country}</p>
              <p class="fs-6">Origin: ${item.origin}</p>
              <div class="d-flex justify-content-between">
                <button class="fs-6 rounded tomato border-0 p-2">${item.pattern}</button>
                <button class="fs-6 rounded tomato border-0 p-2">${item.coat}</button>
              </div>
            </div>
          </div>
          `;
    });
  } catch (error) {
    console.log(error);
    Breeds.innerHTML = "Error '404'";
  }
};

const getImg = async () => {
  const res = await axios.get("https://api.thecatapi.com/v1/images/0XYvRd7oD");
  return res;
};
const setImg = async () => {
  try {
    const res = await getImg();

    let image = document.createElement("img");
    image.classList = "rounded-3";
    image.style.width = "700px";
    image.style.height = "400px";
    image.style.objectFit = "cover";
    image.url = res.data.url;
    img.innerHTML += image;
  } catch (error) {
    img.innerHTML = "Error '404'";
  }
};

const init = () => {
  setBreeds();
  setImg();
};

init();
