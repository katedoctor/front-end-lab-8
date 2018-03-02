var modelMap = new Object;
var root = document.getElementById('root');

tanks.forEach( (item) => modelMap[item.model] = item );

window.onhashchange = router;

router();

function router() {
	var hash = window.location.hash.slice(1);
	var tank = modelMap[hash];
  if (location.hash == ''){
    main(tanks);
  } else {
    detailsTanks(tank);
  }
}

function main(tanks) {
	root.innerHTML='';

  var h1 = document.createElement('h1');
    root.appendChild(h1);
    h1.textContent = 'Most popular tanks';

    var list = document.createElement("div");
    root.appendChild(list);
    list.classList.add("list");

    for ( var i = 0; i < tanks.length; i++) {
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

function detailsTanks(tank) {
  	root.innerHTML='';

    var container = document.createElement('div');
	  container.className = 'tank-details container';
    root.appendChild(container);

    var headline = document.createElement('div');
    headline.className = 'headline';
    container.appendChild(headline);

    var flag = document.createElement('img');
    flag.className = 'flag';
    flag.setAttribute('src', tank.country_image);
    flag.setAttribute('title', tank.country.toUpperCase() );
    headline.appendChild(flag);

    var label = document.createElement('span');
    label.innerHTML = tank.model.toUpperCase();
    label.className = 'label';
    headline.appendChild(label);

    var level = document.createElement('span');
    level.innerHTML = `(level ${tank.level})`;
    level.className = 'level';
    headline.appendChild(level);

    var flexBlock = document.createElement('div');
    flexBlock.className = 'flex';
    container.appendChild(flexBlock);

    var preview = document.createElement('aside');
    preview.className = 'preview';
    preview.appendChild( document.createElement('h4') )
    preview.firstChild.innerHTML = 'Preview';
    flexBlock.appendChild(preview);

    var image = document.createElement('img');
    image.setAttribute('src', tank.preview);
    preview.appendChild(image);

    var details = document.createElement('aside');
    details.className = 'details';
    details.appendChild( document.createElement('h4') )
    details.firstChild.innerHTML = 'Characteristics';
    flexBlock.appendChild(details);

    var linkToThumbnails = document.createElement('a');
    linkToThumbnails.setAttribute('href', '#');
    linkToThumbnails.setAttribute('title', 'Back to preview');
    linkToThumbnails.innerHTML = 'Back to list view';
    container.appendChild(linkToThumbnails);

    function buildTable() {
    	var table = document.createElement('table');
    	for (var key in tank.details) {
    		var row = document.createElement('tr');
    		var property = document.createElement('td');
    		var value = document.createElement('td');
    		value.innerHTML = tank.details[key];
    		property.innerHTML = key.replace(/_/g, ' ');
    		row.appendChild(property);
    		row.appendChild(value);
    		table.appendChild(row);
    	};
    	return table;
    };
	details.appendChild( buildTable() );
};
