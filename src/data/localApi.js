// Import local images
import AnnaPhoto from "../assets/anna.jpg";
import MariaPhoto from "../src/assets/dulla.jpeg";
import LisaPhoto from "../assets/lisa.jpg";
import EmmaPhoto from "../assets/emma.jpg";

const users = [
  {
    id: 1,
    username: "dulla",
    password: "1234",
    name: "Dulla",
    age: 67,
    bio: "",
    photo: DullaPhoto
  },
  {
    id: 2,
    username: "Abdullah",
    password: "aaa",
    name: "Maria",
    age: 18,
    bio: "",
    photo: AbdullahPhoto
  },
  {
    id: 3,
    username: "aldi",
    password: "abcd",
    name: "Aldi",
    age: 41,
    bio: "",
    photo: AldiPhoto
  },
  {
    id: 4,
    username: "baba",
    password: "nana",
    name: "BANA",
    age: 21,
    bio: "",
    photo: BabaPhoto
  }
];

export const login = (username, password) => {
  return users.find(
    u => u.username === username && u.password === password
  );
};

export const getOtherUsers = (loggedInUserId) => {
  return users.filter(u => u.id !== loggedInUserId);
};
