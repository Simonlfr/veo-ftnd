import React from "react";
import { useNodes } from "../../providers/nodeContextProvider";

const NodeList: React.FC = () => {
    const { nodes } = useNodes();

    return (
        <ul>
            {nodes.map((node) => (
                <li key={node.id}>
                    {node.name} - {node.parent} - Height: {node.height}
                    {"department" in node &&
                        ` (Department: ${node.department})`}
                    {"programmingLanguage" in node &&
                        ` (Programming Language: ${node.programmingLanguage})`}
                </li>
            ))}
        </ul>
    );
};

export default NodeList;
