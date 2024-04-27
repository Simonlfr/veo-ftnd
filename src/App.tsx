import "./App.css";
import { NodeProvider } from "./providers/nodeContextProvider";
import NodeList from "./components/noteList/noteList";
import NodeForm from "./components/noteForm/noteForm";

function App() {
    return (
        <NodeProvider>
            <NodeList />
            <NodeForm />
        </NodeProvider>
    );
}

export default App;
