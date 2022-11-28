const BASE_URL = 'http://localhost:5003/api/admin/member';

const FetchFromApi_member = async() => {
    const response = await fetch(BASE_URL,{method:"GET"});
    const data = await response.json()
    return cons(data);
}
const cons=(data)=>{
    console.log(data);
}
export default FetchFromApi_member