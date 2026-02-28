import "./PersonalCard_style.css";
import ProductCard from './ProductCard'
import PersonalCard from './PersonalCard'
import "./ProductCard_style.css";
import PersonalInfoCard from "./PersonalInfoCard";

function App() {
  return (
    <div>
      <PersonalCard />
      <ProductCard />
      <PersonalInfoCard/>
    </div>
  )
}

export default App