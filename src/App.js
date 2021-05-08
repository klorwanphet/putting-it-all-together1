
import './App.css';
import PersonCard from './components/PersonCard'; 



function App() {
  return (
    <div className="App">
      <PersonCard 
        lname="Doe"
        fname="Jane"
        age={45}
        hcolor="Black"/>

      <PersonCard
        lname="Smith"
        fname="John"
        age={88}
        hcolor="Brown"/>
      <PersonCard 
        lname="Fillmore"
        fname="Millard"
        age={50}
        hcolor="Brown"/>
      <PersonCard 
        lname="Smith"
        fname="Maria"
        age={62}
        hcolor="Brown"/>
    </div>
  );
}

export default App;
