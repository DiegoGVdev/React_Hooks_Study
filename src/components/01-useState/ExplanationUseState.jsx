export const ExplanationUseState = () => {
  const nameHook = "{useState}";
  const useStateCall = {
    firstWay: "const [state, useState] = useState( initialValue)",
    secondWay:
      "const [ { variable1, variable2 }, useState ] = useState( {variable1: 20, variable2:  'Diego' } )",
    thirsthWay:
      "const [ state, setState] = useState( {couter1: 20, counter2: 40, counter3: 60, variable4: 7 })",
  };

  const { firstWay, secondWay, thirsthWay } = useStateCall;
  return (
    <div>
      <h1 className="text-3xl border-b-2 ">useState Hook</h1>
      <h3 className="text-xl text-left p-4 font-bold text-slate-600  ">
        Definición:
      </h3>
      <p className="text-lg text-left pl-4 mb-4   ">
        useState es un Hook que nos permite agregar una variable de estado en un
        componente
      </p>

      <h3 className="text-xl text-left p-4 font-bold text-slate-600  ">
        Forma de importar useState:
      </h3>
      <p className="text-lg text-left pl-4 mb-4   ">
        Para importar useState en un componente usamos la siguiente sintaxis:
        <br />
        <br />
        <span className="font-semibold text-red-400 text-base">
          import {nameHook} from &apos;react&apos;
        </span>
      </p>

      <h3 className="text-xl text-left p-4 font-bold text-slate-600  ">
        Formas de definir useState:
      </h3>
      <p className="text-lg text-left pl-4 mb-4   ">
        useState se define mediante una desestructuración de un arreglo, este
        recibe nuestra variable de estado y una función mediante la cual vamos a
        poder modificar el valor de nuestra variable de estado, esta sintaxis se
        ve de la siguiente manera
        <br />
        <br />
        <span className="font-semibold text-red-400 text-base">{firstWay}</span>
      </p>

      <p className="text-lg text-left pl-4 mb-4   ">
        En nuestro estado inicial podemos pasar diferentes tipos de datos entre
        esos un objeto o arreglo que nos va a permitir en nuestro estado poder
        hacer desestructuración permitiendo así llamar a variables individuales
        para cada valor almacenado. La sintaxis que usaríamos seria la
        siguiente:
        <br />
        <br />
        <span className="font-semibold text-red-400 text-base">
          {secondWay}.
        </span>
      </p>

      
      
      <p className="text-lg text-left pl-4 mb-4   ">
        Otra forma, es desestructurar la variable de estado, lo que nos permite
        seleccionar solo las variables que vamos a utilizar en el componente.
        Esto es similar a cómo funcionan Context o Redux cuando almacenan un
        estado global. Si deseamos editar solo una de las variables y mostrar
        otras variables almacenadas en el estado, podemos utilizar el operador
        spread (...nombre del objeto) dentro de la función setState() junto con
        la variable que vamos a modificar del objeto almacenado. el codigo se
        veria de la siguiente manera
        <br/>
        <span className="font-semibold text-red-400 text-base">
          <br />
          import {nameHook} from &apos;react&apos;
          <br />
          export const Counter = () => &#123;
          <br />
          &emsp;{thirsthWay}
          <br />
          &emsp;const &#123; counter1, counter2 &#125; = state
        <br/>
        &emsp;const handleClick = () =&gt; &#123;

        <br/>
        &emsp; &emsp; setState(&#123;<br/>&emsp; &emsp; &emsp;...state, <br/>&emsp;&emsp;&emsp; counter1: counter1 + 1<br/>&emsp; &emsp; &#125;)
        <br/>
        &emsp;return (
          <br/>
         &emsp; &emsp; &#60; &#62;

         <br/>
         &emsp; &emsp; &emsp; &#60; h1 &#62; couter1:&#123; counter1 &#125; &#60;  &#47; h1 &#62;
         <br/>
         &emsp; &emsp; &emsp; &#60; h1 &#62; couter2:&#123; counter2 &#125; &#60;  &#47; h1 &#62;
         <br/>

         &emsp; &emsp; &emsp; &#60; button onClick =  &#123; handleClick &#125; &#62; +1 &#60; &#47; button&#62;
         <br/>
         &emsp; &emsp; &#60; &#47; &#62;
        </span>
      </p>
    </div>
  );
};
