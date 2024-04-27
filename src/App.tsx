import "./App.css";
import { NodeProvider } from "./providers/nodeContextProvider";
import NodeForm from "./components/noteForm/noteForm";
import styled from "styled-components";
import NoteTree from "./components/noteTree/noteTree";

function App() {
    return (
        <NodeProvider>
            <Container>
                <NodeForm />
                <NoteTree />
            </Container>
        </NodeProvider>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`;

export default App;
