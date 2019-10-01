const userData = [
  {
    id: "1",
    firstName: "Ted Ian",
    lastName: "Osias",
    occupation: "Software Engineer",
    profilePicture:
      "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
  },
  {
    id: "2",
    firstName: "A",
    lastName: "A",
    occupation: "Front End",
    profilePicture:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fustechportal.com%2Fwp-content%2Fuploads%2F2018%2F09%2FBadBoy-aa0abf31-2fa4-4664-b468-62fcd3876f0f-498x1024.jpg&f=1&nofb=1"
  },
  {
    id: "3",
    firstName: "B",
    lastName: "B",
    occupation: "Back End",
    profilePicture:
      "https://images.unsplash.com/photo-1559815435-13978747eecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    id: "4",
    firstName: "C",
    lastName: "C",
    occupation: "Full Stack",
    profilePicture:
      "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
  },
  {
    id: "5",
    firstName: "D",
    lastName: "D",
    occupation: "Designer",
    profilePicture:
      "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
  },
  {
    id: "6",
    firstName: "E",
    lastName: "E",
    occupation: "Analyst",
    profilePicture:
      "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
  },
  {
    id: "7",
    firstName: "F",
    lastName: "F",
    occupation: "Project Manager",
    profilePicture:
      "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
  },
  {
    id: "8",
    firstName: "G",
    lastName: "G",
    occupation: "QA Engineer",
    profilePicture:
      "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
  },
  {
    id: "9",
    firstName: "H",
    lastName: "H",
    occupation: "Technical Writer",
    profilePicture:
      "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
  },
  {
    id: "10",
    firstName: "I",
    lastName: "I",
    occupation: "Junior Programmer",
    profilePicture:
      "https://i.pinimg.com/originals/1f/62/51/1f6251d4e9ab99d8bd84a4548a6f902e.jpg"
  }
];

const searchInput = document.getElementById("search");
const tableElement = document.getElementById("users");

searchInput.addEventListener("keyup", event => {
  const searchText = searchInput.value.toLowerCase();

  if(!searchText){
      clearRows();
    addRows(userData);
  }else{
    const filterUsers = userData.filter(user => {
        // return user.firstName.toLowerCase() === searchText ||
        //   user.lastName.toLowerCase() === searchText ||
        //   user.occupation.toLowerCase() === searchText;
        return user.firstName.toLowerCase().includes(searchText) ||
        user.lastName.toLowerCase().includes(searchText) ||
        user.occupation.toLowerCase().includes(searchText);
      });
      clearRows();
      addRows(filterUsers);
  }
});

const clearRows = () => {
    const tbody = tableElement.children[1];
    Array.from(tbody.childNodes).forEach(row => {
      row.remove();
    });
};

const addRows = users => {
  const forEachCallbackFn = function(user) {
    const rowElement = document.createElement("tr");
    const id = document.createElement("td");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const occupation = document.createElement("td");

    id.textContent = user.id;
    firstName.textContent = user.firstName;
    lastName.textContent = user.lastName;
    occupation.textContent = user.occupation;

    rowElement.appendChild(id);
    rowElement.appendChild(firstName);
    rowElement.appendChild(lastName);
    rowElement.appendChild(occupation);

    tableElement.children[1].appendChild(rowElement);
  };

  users.forEach(forEachCallbackFn);
};

addRows(userData);
