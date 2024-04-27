import Tree from "react-d3-tree";
import { useTreeData } from "../../hooks/useTreeData";
import styled from "styled-components";

export const NoteTree: React.FC = () => {
    const treeData = useTreeData();

    if (!treeData.length) return <div>No data to display.</div>;

    return (
        <Container>
            <Tree data={treeData} orientation="vertical" pathFunc="step" />
        </Container>
    );
};

const Container = styled.div`
    border: 2px solid black;
    background-color: white;
    height: 800px;
    width: 800px;
`;

export default NoteTree;
