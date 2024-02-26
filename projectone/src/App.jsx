function App() {
  const username = "vivek rawat";
  return (
    <>
      <div>
        <h1>
          hello world
          {
            username /*We can only use evaluated expression here because actually the variable injected after creating the whole tree in the main.jsx it passes last of the function createElement of react 
    and it is like a object and we cannnot make a object a statement so we only have to pass the evaluated expression means which value has been previously evaluated and cannot be the if or else if statements 
     */
          }
        </h1>
      </div>

      {/* summary of this video : first we have created an dom like structure using custom react 
     so  after we make a modular and more reusable approach of that using loops which is modular approact
     after we make   that custom reder method we created we pass the value with that specific approach and get the result
     so as we know that app.jsx is a nethod can't we just pass the method directly into the react rendor method we can obviously do that
     so after that we passes our custom element to the react.render function return but that do not works because the methods are not same as which are written in the behind the scenes in the react
     for that we have created a custom element which can be passed
      after that we created a react elelment by the help of React.createElement which takes several arguments and have their own key values which after passing are showned on the live
      by this we evaluate the react.createElement is automatically injected by the babel transpiler and finally we can see it in the window localhost in that function we first pass the tagname then  pass the attribute and after passing the attribute we pass the children and after variables at the last as an object 
      after that we see that how a varible is injected in the createReactElelment function it is injected after the children and  properties pases to the fuction and because it is an object we cannot pass some  unevaluated value llike if else statement we can only pass the pre evaluated expression 
      we can directly call the jsx element and we can do directly manipulation without even calling the render but this thing sometimes tricky and have many things inside that deep so we do not prefer to do that 
      All this thing is present in the react open source... repositry we can see that there */}
    </>
  );
}

export default App;
