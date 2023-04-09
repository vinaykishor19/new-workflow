async function getUsers() {
    let url = 'https://64307b10d4518cfb0e50e555.mockapi.io/workflow';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
export async function renderUsers() {
    let users = await getUsers();
    return users;
}
export function datauser(){
fetch('https://64307b10d4518cfb0e50e555.mockapi.io/workflow')
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data[0]);
  });
}