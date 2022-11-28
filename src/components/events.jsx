const BASE_URL = 'http://localhost:5003/api/admin/event';

const FetchFromApi_event = async() => {
    const response = await fetch(BASE_URL,{method:"GET"});
    const data = await response.json()
    return cons(data);
}
const cons=(data)=>{
    console.log(data);
}
export default FetchFromApi_event