document.addEventListener("DOMContentLoaded", () => {
    console.log('page loaded!');

    let form = document.getElementById('name-input-form');
    let name = document.getElementById('participant');
    let newCost = document.getElementById('costInput');

    form.addEventListener('submit', function(e){
      e.preventDefault();
      createNameCard(name.value);
    });
});

function createNameCard(name){
  let namesDiv = document.getElementById('names-container');

  let nameCard = document.createElement('div');
  nameCard.className = 'card bg-dark text-white';
  let innerDiv = document.createElement('div');
  innerDiv.className = 'card-body';
  let title = document.createElement('h4');
  title.style = "font-family: name";
  title.className = 'card-name';
  title.className = 'card-title';
  title.innerHTML = name;

  let space = document.createElement('br');

  innerDiv.append(title);
  nameCard.append(innerDiv);
  namesDiv.append(nameCard);
  namesDiv.append(space);
}
