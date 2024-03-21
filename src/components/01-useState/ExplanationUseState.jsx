export const ExplanationUseState = () => {
  const nameHook = "{useState}";
  const useStateCall = {
    firstWay: "const [state, useState] = useState( initialValue)",
    secondWay: "const [ { variable1, variable2 }, useState ] = useState( {variable1: 20, variable2:  Diego } )",
  };

  const { firstWay, secondWay } = useStateCall;
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
        Para importar useState en un componente usamos la siguiente sintaxis:{" "}
        <br />
        <span className="font-semibold text-red-400 text-base">
          import {nameHook} from 'react'
        </span>
      </p>

      <h3 className="text-xl text-left p-4 font-bold text-slate-600  ">
        Formas de definir useState:
      </h3>
      <p className="text-lg text-left pl-4 mb-4   ">
        useState se define mediante una desestructuracion de un arreglo, este
        recibe nuestra variable de estado y un funcion mediante la cual
        vamos a poder modificar el valor de nuestra variable de estado, esta
        sintaxis se ve de la siguiente manera
        <br />
        <span className="font-semibold text-red-400 text-base">{firstWay}</span>
      </p>

      <p className="text-lg text-left pl-4 mb-4   ">
        
        En nuestro estado incial podemos pasar diferentes tipos de datos entre esos un objeto o arreglo que nos va a permitir en nuestro estado
        poder hacer desestructuracion permitiendo asi llamar a variables individuales para cada valor almacenado. La sintaxis que usariamos seria la siguiente: 
        <br />
        <span className="font-semibold text-red-400 text-base">{secondWay}.</span>
      </p>
    </div>
  );
};
