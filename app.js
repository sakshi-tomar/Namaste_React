/**
 * <div id="parent">
 *    <div id = "child">               How to achieve this kind of structure in React.
 *       <h1>I'm h1</h1>
 *       <h2>I'm h2</h2>
 *    </div>
 *  <div id = "child2">
 *       <h1>I'm h1</h1>
 *       <h2>I'm h2</h2>
 *    </div>
 * <div>
 */


const parent = React.createElement(
    "div",
    { id: "parent" }, [                                //[name of the tag, {attribue},children]
    React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm H1"), React.createElement("h2", {}, "I'm h2")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'm H1"), React.createElement("h2", {}, "I'm h2")]),
]
);

console.log(parent);       //this returns a javascript object.
const root = ReactDOM.createRoot(document.getElementById("root")); //responsible for creating root . assign root inside react.
root.render(parent) //1.converting this heading objecting into h1 element and putting it on the page
                    //2. if we already had elements in our html in root div (only) then they will be replaced by this render other elements will stay.