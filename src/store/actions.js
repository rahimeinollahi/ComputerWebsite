import axois from 'axios';

async function fetchData({commit}){
    const url='https://jsonplaceholder.typicode.com/todos';
    const response =await axois.get(url);
    commit('fetchData',response.data);
}
// async function fetchDataBook3({commit}){
//     const url='https://jsonplaceholder.typicode.com/todos';
//     const response=await axois.get(url);
//     commit('fetchDataBook3',response.data);
// }
export default {
    fetchData 
}