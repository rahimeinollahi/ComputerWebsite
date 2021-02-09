import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations'
// import todos from './moduls/todos';
// import TableInfo from './Modules/TableInfo'

export default createStore({
  state: {
   navHomeItems:[
     {id:1,name:'Computer',router:'/'},
     {id:2,name:'Electronic',router:'/elctroninpage'},
     {id:3,name:'Books',router:'/bookhome'},
   ],
   leftSideHomeItems:[
     {id:1,headerName:'heade1',showLink:true,parts:
        [
          {id:1,name:'link one ',router:'/'},
          {id:2,name:'link two ',router:'/lheaderpage2'},
          {id:3,name:'link three ',router:'/lheaderpage3'},
      ]
    },
     {id:2,headerName:'heade2',showLink:true,parts:
        [
          {id:1,name:'Page four ',router:'/lheaderpage4'},
          {id:2,name:'Page five ',router:'/lheaderpage5'},
          {id:3,name:'Page six ',router:'/lheaderpage6'},
      ]
    },
     {id:3,headerName:'heade3',showLink:true,parts:
        [
          {id:1,name:'page 7 ',router:'/lheaderpage7'},
          {id:2,name:'page 8',router:'/lheaderpage8'},
          {id:3,name:'page9 ',router:'/lheaderpage9'},
      ]
    },
   ],
   RightSideHomeItems:[
    {id:1,headerName:'heade1',showLink:true,parts:
       [
         {id:1,name:'link one ',router:'/'},
         {id:2,name:'link two ',router:'/lheaderpage2'},
         {id:3,name:'link three ',router:'/lheaderpage3'},
     ]
   },
    {id:2,headerName:'heade2',showLink:true,parts:
       [
         {id:1,name:'another link one ',router:'/lheaderpage4'},
         {id:2,name:'another link two ',router:'/lheaderpage5'},
         {id:3,name:'another link three ',router:'/lheaderpage6'},
     ]
   },
    {id:3,headerName:'heade3',showLink:true,parts:
       [
         {id:1,name:'another link one ',router:'/lheaderpage7'},
         {id:2,name:'another link two ',router:'/lheaderpage8'},
         {id:3,name:'another link three ',router:'/lheaderpage9'},
     ]
   },
  ],
  listPerson:[
    {id:1,name:"rahim",url:'../../assets/images/1.jpg',postData:'Posted on February 19, 2016',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:2,name:"mina",url:'../../assets/images/2.jpg',postData:'Posted on February 9, 215',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:3,name:"rahim",url:'../../assets/images/3.jpg',postData:'Posted on February 19, 2016',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:4,name:"amin",url:'../../assets/images/4.jpg',postData:'Posted on February 1, 2016',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:5,name:"rahim",url:'../../assets/images/5.jpg',postData:'Posted on February 19, 2000',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:6,name:"rana",url:'../../assets/images/6.jpg',postData:'Posted on February 9, 2016',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:7,name:"rahim",url:'../../assets/images/7.jpg',postData:'Posted on February , 2012',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:8,name:"rahim",url:'../../assets/images/8.jpg',postData:'Posted on February 19, 2016',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:9,name:"rahim",url:'../../assets/images/9.jpg',postData:'Posted on February 19, 2016',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
    {id:10,name:"rahim",url:'../../assets/images/1.jpg',postData:'Posted on February 19, 2016',message:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.'},
  ],
  sectionList:[
    {id:1,href:'#section1',name:"lesson 1",headerName:'example one',content:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.'},
    {id:2,href:'#section2',name:"lesson 2",headerName:'example two',content:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.'},
    {id:3,href:'#section3',name:"lesson 3",headerName:'example three',content:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.'},
    {id:4,href:'#section4',name:"lesson 4",headerName:'example four',content:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.'},
    {id:5,href:'#section5',name:"lesson 5",headerName:'example five',content:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.'},
    {id:6,href:'#section6',name:"lesson 6",headerName:'example six',content:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar.'},
  ],
  sectionContent:[
    {id:'section1',class:'container-fluid ',header:'course  one',itemContent:"Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!"},
    {id:'section2',class:'container-fluid',header:'course  two',itemContent:"Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!"},
    {id:'section3',class:'container-fluid ',header:'course  three',itemContent:"Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!"},
    {id:'section4',class:'container-fluid ',header:'course  four',itemContent:"Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!"},
    {id:'section5',class:'container-fluid ',header:'course  five',itemContent:"Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!"},
    {id:'section6',class:'container-fluid ',header:'course  six',itemContent:"Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!"},
  ]
  ,listProfilePage4:[
    {id:1,header:'developer',name:'rahim einollhi',alt:'rahim photo',city:'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:2,header:'enginner',name:'maryam azizi',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:3,header:'worker',name:'rana azizi',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:4,header:'enginner',name:'ahmad hatami',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:5,header:'saler',name:'maryam azizi',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:6,header:'enginner',name:'ali azizi',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:7,header:'enginner',name:'maryam azizi',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:8,header:'enginner',name:'reza azizi',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:9,header:'enginner',name:'maryam azizi',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
    {id:10,header:'enginner',name:'maryam azizi',alt:'maryam photo',city:'lVideo provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search ',seeProfile:'See profile',router:'/lheaderpage4'},
  ],
    page5Items:[
      {id:1,header:'TECHNOLOGY ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:2,header:'OFFICE ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:3,header:'JADI ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:4,header:'ALGORITHM ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:5,header:'INHERIT ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:6,header:'TECHNOLOGY ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:17,header:'CLASS ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
    ],
    page6Items:[
      {id:1,header:'TECHNOLOGY ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:2,header:'OFFICE ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:3,header:'JADI ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:4,header:'ALGORITHM ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:5,header:'INHERIT ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:6,header:'TECHNOLOGY ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:17,header:'CLASS ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:1,header:'TECHNOLOGY ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:2,header:'OFFICE ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:3,header:'JADI ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:4,header:'ALGORITHM ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:5,header:'INHERIT ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:6,header:'TECHNOLOGY ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
      {id:17,header:'CLASS ',content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus possimus doloremque inventore impedit qui facere doloribus rem. Sed quaerat aspernatur autem corrupti? Iste blanditiis dolorem iusto, tempora asperiores ad?'},
    ],
    page7Images:[
      {id:1,url:'',name:'image 1'},
      {id:2,url:'',name:'image 2'},
      {id:3,url:'',name:'image 3'},
      {id:5,url:'',name:'image 4'},
      {id:6,url:'',name:'image 5'},
      {id:7,url:'',name:'image 6'},
      {id:8,url:'',name:'image 7'},
      {id:9,url:'',name:'image 8'},
      {id:10,url:'',name:'image 9'},
      {id:10,url:'',name:'image 10'},
    ],
    elHomeItem:[
      {id:1,title:'title one ',completed:true},
      {id:2,title:'title two ',completed:true},
      {id:3,title:'title three ',completed:true},
      {id:4,title:'title four ',completed:true},
    ]
   
  },
  getters:{
    // getList:state=>state.listPerson
    
  },
  actions,
  mutations,
  modules: {
    // todos
    // TableInfo
  }
})
