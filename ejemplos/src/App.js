import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Navbar/Navbar";
import {Container, Row, Col} from "react-bootstrap"
function App() {
  return (
    <div className="App">
      <Header category1={"Ropa"} category2={"Calzado"} category3={"Accesorios"}/>
      <main className="main-content">
        <Container>
          <Row className="my-5">
            <Col>
              <h1>Este es el contenido principal de react</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <ItemListContainer greeting={"Hola mundo react"} greeting2={"Segundo saludo"}  greeting3={"Tercer saludo"}/>
    </div>
  );
}

export default App;
