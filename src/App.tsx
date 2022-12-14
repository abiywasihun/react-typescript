
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Perosn';
import { PersonList } from './components/PerosnList';
import { Status } from './components/Status';

function App() {
  const personName={
    first:'Bruce',
    last:'Wayne'
  }
  const nameList=[
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Clark',
      last:'Wayne'
    },
    {
      first:'Princess',
      last:'Diana'
    },
  ]
  return (
    <>
    <div className="App">
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      </div>
      { /* This one is for the first tutorial
      <div className="App">
      <Greet name="Vishwas" isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>
          Oscar goes to Lenardo Dicaprio!
          </Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log('Button clicked',event,id)
      }}/>
      <Input value='' handleChange={(event)=>console.log(event)}/>
      <Container styles={{border:'1px solid black',padding:'1rem'}}/>
       </div>*/}</>
  );
}

export default App;
