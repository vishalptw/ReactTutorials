const heading = React.createElement("h1",{id: "heading"},"hellooo from my first react app!");
const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div", {id: "parent"},
    [React.createElement("div", {id: "child1"},
    React.createElement("h1", {}, 'this is h1 tag'),
    React.createElement("h2", {},'this is h2 tag')),
    React.createElement("div", {id: "child2"},
    React.createElement("h1", {}, 'this is h1 tag'),
    React.createElement("h2", {},'this is h2 tag'))]);

    
root.render(parent);    