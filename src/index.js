import cardTmpl from "./card-tmpl.hbs";

const users = [
  [
    {
      name: "name1",
      surname: "surname1",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name2",
      surname: "surname2",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name2_2",
      surname: "surname2_2",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
  ],
  [
    {
      name: "name3",
      surname: "surname3",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name4",
      surname: "surname4",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name5",
      surname: "surname5",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
  ],
  [
    {
      name: "name6",
      surname: "surname6",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name7",
      surname: "surname7",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name8",
      surname: "surname8",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
  ],
  [
    {
      name: "name9",
      surname: "surname9",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name10",
      surname: "surname10",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name11",
      surname: "surname11",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
  ],
  [
    {
      name: "name12",
      surname: "surname12",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name13",
      surname: "surname13",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name14",
      surname: "surname14",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
  ],
  [
    {
      name: "name15",
      surname: "surname12",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name16",
      surname: "surname13",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name17",
      surname: "surname14",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
  ],
  [
    {
      name: "name18",
      surname: "surname12",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name19",
      surname: "surname13",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name20",
      surname: "surname14",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
  ],
  [
    {
      name: "name21",
      surname: "surname12",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name22",
      surname: "surname13",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
    {
      name: "name23",
      surname: "surname14",
      age: 30,
      url:
        "https://sun9-20.userapi.com/c850424/v850424285/1885fd/4BasTBUdyy8.jpg",
    },
  ],
];

const dataEl = document.querySelector("ul.data");
const paginationEl = document.querySelector("ul.pagination");
// const btnLeft = document.querySelector("button.left");

let pagMarkup =
  '<li class="pagination-item"><button class="left">&#8592</button></li>';
let currentPage = 0;
const BTNS_ON_PAGE = 3;

renderDataMarkup(currentPage);
renderPaginationMarkup();

pagMarkup +=
  '<li class="pagination-item"><button class="right">&#8594</button></li>';
paginationEl.insertAdjacentHTML("beforeend", pagMarkup);

paginationEl.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    if (Number(event.target.textContent)) {
      currentPage = Number(event.target.textContent) - 1;
      setActiveBtn();
    } else if (
      event.target.textContent === "→" &&
      currentPage < users.length - 1
    ) {
      currentPage += 1;
      setActiveBtn();
    } else if (event.target.textContent === "←" && currentPage > 0) {
      currentPage -= 1;
      setActiveBtn();
    } else {
      return;
    }

    clearDataMarkup();
    renderDataMarkup(currentPage);
  }
});

function renderDataMarkup(numberOfPage) {
  dataEl.insertAdjacentHTML("afterbegin", cardTmpl(users[numberOfPage]));
}

function clearDataMarkup() {
  dataEl.innerHTML = "";
}

function renderPaginationMarkup() {
  //   users.forEach((user, index) => {
  //     const pagItem = `<li class='pagination-item'><button>${
  //       index + 1
  //     }</button></li>`;
  //     pagMarkup += pagItem;
  //   });

  if (currentPage === 0) {
    for (let i = 1; i <= BTNS_ON_PAGE; i += 1) {
      const pagItem = `<li class='pagination-item'><button class="button-number">${i}</button></li>`;
      pagMarkup += pagItem;
    }
    pagMarkup += `<li class='pagination-item'><button class="more-pages">...</button></li>
    <li class='pagination-item'><button class="button-number">${users.length}</button></li>`;
  }
}

function setActiveBtn() {
  const numberBtnsEl = document.querySelectorAll(".button-number");
  const btnsArray = [...numberBtnsEl];

  btnsArray.find((btn, index) => {
    if (btn.classList.contains("active")) {
      numberBtnsEl[index].classList.remove("active");
    }
  });

  numberBtnsEl[currentPage].classList.add("active");
}

setActiveBtn();
