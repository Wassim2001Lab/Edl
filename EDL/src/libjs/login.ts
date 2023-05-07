interface User {
  password : string,
  username : string
};

const users = [
  {password: "1",username: "sem"},
  {password: "1",username: "wassim"}, 
  {password: "1",username: "heithem"}  
]



export const login = (user:User) => {
  if (users.find(u => u.password === user.password && u.username === user.username)) {
    alert("success");
  }
  else {
    alert("failure");
  }
}  
