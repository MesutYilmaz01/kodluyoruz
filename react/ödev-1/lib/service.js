import axios from "axios"

export default async function getData(user_id){
    const { data } = await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
    return data
}
