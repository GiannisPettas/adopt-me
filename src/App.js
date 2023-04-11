const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement('div', { id: 'my-id' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Wrlof', animal: 'Dog', breed: 'mixed' }),
    React.createElement(Pet, {
      name: 'Zaxarias',
      animal: 'Cat',
      breed: 'mixed',
    }),
    React.createElement(Pet, {
      name: 'Ririka',
      animal: 'Cats',
      breed: 'mixed',
    }),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
