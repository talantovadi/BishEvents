let cards = document.querySelector(".cards");

fetch("http://localhost:8080/events")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      cards.innerHTML += `
        <div class="card">
            <a href="oneEvent/oneEvent.html#${element.id}">
            <img src="https://image.vietnamnews.vn/uploadvnnews/Article/2024/10/13/380145_4978123600919249_image.png" alt="img"/>
            </a>
            <h4>${element.title}</h4>
            <h3>${element.eventDateTime}</h3>
            <p>${element.description}</p>

            <button>Забронировать</button>
        </div>
        `;
    });
  });
