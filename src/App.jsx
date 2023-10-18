import Button from "./components/Button"
import Image from "./components/Image"
import Input from "./components/Input"
import ProductHeading from "./components/ProductHeading"
import SubHeading from "./components/SubHeading"
import bag from "./assets/bag.png"
import Facility from "./components/Facility"
import Container from "./components/Container"


function App() {
  

  return (
    <>
<Container>
<h1 className="bg-main ">mahmud</h1>
<Input placeholder="nam lekho" type="text" text="nam tai to lekhba"/>
<Button text="mahmud"/>
<ProductHeading price="44.00 taka" text="school bag" />
<SubHeading text="mahmudul hasan"/>
<Image src={bag} alt="bag ar pic re vai"/>
<Facility text="WORLDWIDE DELIVERY " ditels="Far far away, behind the word mountains, far from the countries."/>
</Container>
    </>
  )
}

export default App
