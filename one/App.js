    const header = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World");//createElement will convert header object into actual React element

    const root = ReactDOM.createRoot(document.getElementById("root"));
    console.log(header);//it is a object
    /*
    
{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
$$typeof
: 
Symbol(react.element)
key
: 
null
props
: 
children
: 
"Hello World"
id
: 
"heading"
xyz
: 
"abc"
[[Prototype]]
: 
Object
ref
: 
null
type
: 
"h1"
_owner
: 
null
[[Prototype]]
: 
Object
     */
const parent = React.createElement("div",{},
    React.createElement("h1",{id:"welcomestyle"},"Hello Ganesh")
)    
const sibiling1 = React.createElement("h2",{id:"s1"},"I am s1");
const sibiling2 = React.createElement("h2",{id:"s2"},"I am s2");
const parent1 = React.createElement("div",{},[sibiling1,sibiling2]);
// root.render(header);
//root.render(parent);
root.render(parent1)

