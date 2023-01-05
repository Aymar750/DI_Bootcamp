const allBooks = [
    {
      title: "ALLAH N'EST PAS OBLIGE",
      author: "AHMADOU KOUROUMA",
      image: "https://www.larevuedesressources.org/IMG/arton2677.gif?1531235136",
      alreadyRead: true
    },
    {
      title: "LE RETOUR DE L'ENFANT SOLDAT",
      author: "FRANCOIS D'ASSISE N'DAH",
      image: "https://takamtikou.bnf.fr/sites/default/files/styles/r200/public/d6/leretour200.jpg?itok=_8IQsV0e",
      alreadyRead: false
    }
];

//to select the div 
const listBooksDiv = document.querySelector('.listBooks');

// Create the table element
const table = document.createElement('table');

// Add the table to the div
listBooksDiv.appendChild(table);

allBooks.forEach(book => {
    // Create a row for the book
    const row = document.createElement('tr');

    // Add the title and author cells to the row
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`;

    // Create the image cell and add it to the row
    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    // If the book has been already read, set the text color to red
    if (book.alreadyRead) {
        row.style.color = 'red';
    }

    // Add the row to the table
    table.appendChild(row);
});
