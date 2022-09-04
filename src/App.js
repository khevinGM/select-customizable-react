import './App.css';
import SelectGM from './modules/sharedModule/SelectsGM'

function App() {
  const listaOpciones = [
    'Manzana',
    'Pera',
    'Mandarina',
    'Uva',
    'Fresa'
  ]
  return (
    <div className="App">
      <SelectGM 
        placeholder="Selecciona un elemento de la lista" 
        options={listaOpciones.map(item => ({text:item, value:item}))}
        width='280'
      />
    </div>
  );
}

export default App;
