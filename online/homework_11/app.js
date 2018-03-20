var rootNode = document.getElementById("root");

function TreeView(structure, node) {
  var ul = document.createElement('ul');
  node.appendChild(ul);

  for (var i = 0; i < structure.length; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);

    var div = document.createElement('div');
    li.append(div);

    var icon = document.createElement('i');
    icon.classList.add('material-icons');
    div.appendChild(icon);

    var span = document.createElement('span');
    span.append(structure[i].title);
    div.appendChild(span);

    if (structure[i].folder) {
      div.setAttribute('onclick', 'show(this)');
      icon.innerHTML = "folder";
      icon.classList.add('folder');

      if (structure[i].children) {
        TreeView(structure[i].children, li);
      } else {
        var ul = document.createElement('ul');
        li.appendChild(ul);

        var li = document.createElement('li');
        li.innerHTML = 'Folder is empty';
        li.classList.add('text-Folder');
        ul.appendChild(li);
      }
    } else {
      icon.innerHTML = "insert_drive_file";
    }
  }
}

function show(el) {
  let folderImg = el.childNodes[0];
  let children = el.parentElement.childNodes[1];

  children.classList.toggle('visible');
  let img = folderImg.innerHTML;
  folderImg.innerHTML = img === "folder" ? "folder_open" : "folder";
 }
var tree = document.createElement('div');
TreeView(structure, tree);

rootNode.appendChild(tree);