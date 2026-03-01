import "./PersonalCard_style.css";
import ProductCard from './ProductCard'
import PersonalCard from './PersonalCard'
import "./ProductCard_style.css";
import PersonalInfoCard from "./PersonalInfoCard";
import JobBoard from './JobBoard';
import "./JobBoard_style.css"
function App() {
  return (
    <div>
      <PersonalCard />
      <ProductCard />
      <PersonalInfoCard/>
      <JobBoard/>
    </div>
  )
}

export default App