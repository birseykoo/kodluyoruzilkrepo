import axios from "axios";

const getData = async () => {
    // const response = await axios.get("https://jsonplaceholder.typicode.com/");
    // console.log(response.data);
    const userPost = await axios.post("https://jsonplaceholder.typicode.com/posts?userId=1", {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        },
        posts: [{
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat",
            body: "quia et suscipit suscipit recusandae"
        }]
    }
    );
    console.log(userPost.data);
    const user1 = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    console.log(user1.data);
}

export default getData;