//import FormContainer from "./js/components/container/FormContainer.jsx";
import index from "./js/index";
store.subscribe(() => console.log("Look Me, Redux!"))
store.dispatch( addArticle({ title: "React Redux Tutorial", id: 1}) )
console.log(store.getState());