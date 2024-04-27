import React, { useState } from "react";
import { useNodes } from "../../providers/nodeContextProvider";

const NodeForm: React.FC = () => {
    const { addNode } = useNodes();
    const [name, setName] = useState("");
    const [parentId, setParentId] = useState("");
    const [type, setType] = useState("Base");
    const [department, setDepartment] = useState("");
    const [programmingLanguage, setProgrammingLanguage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const node = {
            id: crypto.randomUUID(),
            name,
            parent: parentId || null,
            height: parentId ? 1 : 0, // Simplified height calculation
            ...(type === "Manager" && { department }),
            ...(type === "Developer" && { programmingLanguage }),
        };
        addNode(node);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="text"
                value={parentId}
                onChange={(e) => setParentId(e.target.value)}
                placeholder="Parent ID"
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Base">Base</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
            </select>
            {type === "Manager" && (
                <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Department"
                />
            )}
            {type === "Developer" && (
                <input
                    type="text"
                    value={programmingLanguage}
                    onChange={(e) => setProgrammingLanguage(e.target.value)}
                    placeholder="Programming Language"
                />
            )}
            <button type="submit">Add Node</button>
        </form>
    );
};

export default NodeForm;
