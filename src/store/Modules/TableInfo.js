// import axois from 'axios';
// const state={
//     // elHomeItem:[
//     //     {id:1,title:'title one ',completed:true},
//     //     {id:2,title:'title two ',completed:true},
//     //     {id:3,title:'title three ',completed:true},
//     //     {id:4,title:'title four ',completed:true},
//     //   ]
// };

// const getters={};

// const mutations={
//     addTodos(state,tableDate){
//         state.elHomeItem=tableDate;
//     }
// }

// const actions={
//     async  addTodos({commit}){
//         const url='https://jsonplaceholder.typicode.com/todos';
//         const response=await axois.get(url);
//         commit('addTodos',response.data);
//     }
// //   async function addTodos({commit}){
// //     const url='https://jsonplaceholder.typicode.com/todos';
// //     const response= await axois.get(url);
// //     commit('addTodos',response.data);
// //    }
// };

// export default {
//     state,
//     getters,
//     mutations,
//     actions
// }