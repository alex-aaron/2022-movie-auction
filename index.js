document.addEventListener("DOMContentLoaded", () => {
    console.log('page loaded!');

    let nameForm = document.getElementById('name-input-form');
    let movieForm = document.getElementById('movie-input-form');
    console.log(movieForm);
    let bidForm = document.getElementById('bid-input-form');
    let bid = document.getElementById('bid');
    let name = document.getElementById('participant');
    let movie = document.getElementById('movie');
    let newCost = document.getElementById('costInput');
    let finalSubmissionForm = document.getElementById('final-submission');
    console.log(finalSubmissionForm);
    let finalName = document.getElementById('final-name-input');
    let finalBid = document.getElementById('final-bid-input');

    nameForm.addEventListener('submit', function(e){
      e.preventDefault();
      createNameCard(name.value);
      name.value = "";
    });

    movieForm.addEventListener('submit', function(e){
      e.preventDefault();
      addCurrentMovie(movie.value);
      movie.value = "";
    });

    bidForm.addEventListener('submit', function(e){
      e.preventDefault();
      addCurrentBid(bid.value);
      bid.value = "";
    });

    finalSubmissionForm.addEventListener('submit', function(e){
      e.preventDefault();
      let movieElement = document.getElementById('movie-text');
      let movie = movieElement.innerText.split(": ")[1];
      addMovieToParticipant(movie, finalName.value, finalBid.value);
    });
});


function createNameCard(name){
  let namesDiv = document.getElementById('names-container');

  let nameCard = document.createElement('div');
  nameCard.className = 'card bg-dark text-white';
  nameCard.setAttribute('id', name);
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

  let nameTable = addTableToCard(name);
  nameCard.append(nameTable);
  namesDiv.append(nameCard);


  namesDiv.append(space);
}

function addCurrentMovie(movie){
  let movieHeading = document.getElementById('movie-text');
  movieHeading.innerHTML = `Current Movie: ${movie}`;
}

function addCurrentBid(bid){
  let bidHeading = document.getElementById('bid-text');
  bidHeading.innerHTML = `${bid}`;
}

function addTableToCard(name){
  console.log('hit this condition');

  let myTable = document.createElement('table');
  myTable.className = 'table table-striped';
  myTable.setAttribute('id', `table-${name}`);

  let thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>Movie</th>
      <th scope='col'>Amount</th>
    </tr>
  `;
  let tbody = document.createElement('tbody');
  tbody.setAttribute('id', `body-${name}`)

  myTable.append(thead);
  myTable.append(tbody);

  return myTable;
}

function addMovieToParticipant(movie, name, bid){
  console.log(bid);
  let tbody = document.getElementById(`body-${name}`);
  let row = document.createElement('tr');
  let num;

  if (tbody.lastChild === null){
    row.innerHTML = `
        <th scope='col' class='movie-num' id=name + "-movie-" + "1">1</th>
        <th scope='col'>${movie}</th>
        <th scope='col'>${bid}</th>
    `;
  } else {
    let previous = tbody.lastChild.getElementsByClassName('movie-num')[0].textContent;
    let num = parseInt(previous) + 1;
    row.innerHTML = `
        <th scope='col' class='movie-num' id=name + "-movie-" + num>${num}</th>
        <th scope='col'>${movie}</th>
        <th scope='col'>${bid}</th>
    `;

  }

  tbody.append(row);

  // x.firstChild.getElementsByClassName('movie-num')[0].textContent
}
