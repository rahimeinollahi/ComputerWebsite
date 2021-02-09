function changeShowContent(state){
        state.leftsideitems.showcontent=!state.leftsideitems.changeShowContent;
    }
    // function fetchDataBook3(state,bookData){
    //     state.tableBook3=bookData;
    // }
    function fetchData(state,tableData){
        state.elHomeItem=tableData;
    }
export default {
    changeShowContent,
    fetchData
}