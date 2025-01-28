const FancyBorder = (props) => {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
};

const WelcomeDialog = () => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">¡Bienvenido!</h1>
      <p className="Dialog-message"> Explora todos nuestros productos!</p>
    </FancyBorder>
  );
};

const GoodByDialog = () => {
  return (
    <FancyBorder color="red">
      <h1 className="Dialog-title">¡Adiós!</h1>
      <p className="Dialog-message">Gracias por visitar nuestra web!</p>
    </FancyBorder>
  );
};

const App = () => {
  return (
    <> 
      <WelcomeDialog />
      <GoodByDialog />
    </>
  );
};
// Usa un fragmento (<> y </>) para envolver ambos componentes sin introducir un div adicional.
// Exporta App si lo estás usando en otro archivo:
export default App;
