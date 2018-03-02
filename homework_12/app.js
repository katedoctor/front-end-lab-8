var root = document.getElementById('root');


window.onhashchange = router;

function router() {
  if (location.hash == '') {
    main(tanks);
  } else {
    const model = location.hash.substr(1);
    detailsTanks(tanks, location.hash.substr(1));
  }
}

var h1 = document.createElement('h1');
root.appendChild(h1);
h1.textContent = 'Most popular tanks';

var list = document.createElement("div");
root.appendChild(list);
list.classList.add("list");



function main(tanks) {

  for ( let i = 0; i < tanks.length; i++) {
    var div = document.createElement("div");
    list.appendChild(div);
    div.classList.add("block");
    div.setAttribute("title", "Click to details");
    div.addEventListener('click', () => location.hash = tanks[i].model);

    var img = document.createElement("img");
    div.appendChild(img);
    img.setAttribute("src", tanks[i].preview);
    img.setAttribute("alt", "tanks.country");
    img.classList.add("imgTanks");

    var icon = document.createElement("img");
    div.appendChild(icon);
    icon.setAttribute("src", tanks[i].country_image);
    icon.classList.add("country");

    var level = document.createElement ("span");
    div.appendChild(level);
    level.setAttribute("id", "level");
    level.innerHTML = tanks[i].level;
    level.classList.add("level");

    var model = document.createElement("span");
    div.appendChild(model);
    model.setAttribute("name", "model");
    model.innerHTML = tanks[i].model;
    model.classList.add("model");

  }
  return list;
}
main(tanks);
function detailsTanks (tanks) {
  let table = createElement(
    'table', {},
    [
      createElement('tr', {},
        [
          createElement('td', {}, 'damage'),
          createElement('td', {}, tank.details.damage)
        ]
      ),
      createElement('tr', {},
        [
          createElement('td', {}, 'breoning'),
          createElement('td', {}, tank.details.breoning)
        ]
      ),
      createElement('tr', {},
        [
          createElement('td', {}, 'attack speed'),
          createElement('td', {}, tank.details.attack_speed)
        ]
      ),
      createElement('tr', {},
        [
          createElement('td', {}, 'time of targeting'),
          createElement('td', {}, tank.details.time_of_targeting)
        ]
      ),
      createElement('tr', {},
        [
          createElement('td', {}, 'ammunition'),
          createElement('td', {}, tank.details.ammunition)
        ]
      )
    ]
  );
  let tableTitle = createElement('h3', {}, 'Characteristics');

  let container = createElement('div', { 'class': 'tank-details' },
    [
      createElement('div', { 'class': 'left-contet' }, [
        createElement('h1', {}, [
          createElement('img', { 'src': tank.country_image }),
          `${tank.model} (level ${tank.level})`
        ]),
        createElement('h2', {}, 'Preview'),
        createElement('img', { 'src': tank.preview }),
        createElement('p', { 'class': 'back-btn' }, 'Back to list view')
      ]),
      createElement('div', { 'class': 'right-contet' }, [tableTitle, table])
    ]
  );

  return container;
}

