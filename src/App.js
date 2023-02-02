import './App.css';
import Data from './Data/Data.js'
import { useState } from "react"
import SingleContent from './Components/SingleContent';

function App() {

  const [content, setContent] = useState(Data)

  return (
    <main>
      <div className="container">
        <h3>My favorite cat type</h3>
        <section>
          {content.map((e) => {
            return <SingleContent key={e.id} {...e}/>
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
