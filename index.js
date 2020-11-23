const c40poems = [
  {
    author: "Cece",
    poem:
      "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
  },
  {
    author: "Cece",
    poem:
      "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
  },
  {
    author: "Cece",
    poem:
      "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
  },
  {
    author: "Lizzo",
    poem:
      "Roses are red \n Sometimes life isn't fair \n Shampoo press \n Get you outta my hair",
  },
<<<<<<< HEAD
  {
    author: "Beyonce",
    poem: "You stuck your hand in my chest and squeezed my heart to death."
  }
=======

  {
    author: "Beyonce",
    poem:
      "Roses are red \n Violets are blue \n I am Beyonce \n Lemme upgrade you",
  },
  {
    // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
    author: "Sebastian",
    poem: "Roses are red \n Violets are blue \n This is a poem \n I like you",
  },
  {
    author:"Beyonce",
    poem: `Roses are red
    violets are blue 
    something something
    how about you?`,
  },
>>>>>>> 8945939cf65a26d132f9d14dbba530d837c67ec0
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");
  let poemArray = array;

  poemArray = array.map((poem) => {
    html += `
    <div class="card m-3">
        <div class="author card-header">
            Author: ${poem.author}
        </div>
        <div class="single-poem card-body">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(c40poems);
