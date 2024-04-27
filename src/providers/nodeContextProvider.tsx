import React, { createContext, useContext, useState } from "react";
import { BaseNode, ManagerNode, DeveloperNode } from "../models/nodes";

type Node = BaseNode | ManagerNode | DeveloperNode;

interface NodeContextType {
    nodes: Node[];
    addNode: (node: Node) => void;
}

const NodeContext = createContext<NodeContextType | undefined>(undefined);

export const NodeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [nodes, setNodes] = useState<Node[]>([]);

    const addNode = (node: Node) => {
        setNodes((prevNodes) => [...prevNodes, node]);
    };

    return (
        <NodeContext.Provider value={{ nodes, addNode }}>
            {children}
        </NodeContext.Provider>
    );
};

export const useNodes = () => {
    const context = useContext(NodeContext);
    if (!context) {
        throw new Error("useNodes must be used within a NodeProvider");
    }
    return context;
};
