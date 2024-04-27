import { useMemo } from "react";
import { BaseNode } from "../models/nodes";
import { useNodeChildren } from "./queryHooks/useNodeChildren";

interface TreeNode extends BaseNode {
    children: TreeNode[];
}

export const useTreeData = () => {
    const { children: data, error, isLoading } = useNodeChildren(1);

    const treeData = useMemo(() => {
        if (!data) return [];

        const nodesById = new Map<string, TreeNode>(
            data.map((node: BaseNode) => [node.id, { ...node, children: [] }])
        );

        const rootNodes: TreeNode[] = [];

        data.forEach((node: BaseNode) => {
            if (node.parent) {
                const parentNode = nodesById.get(node.parent);
                if (parentNode) {
                    parentNode.children.push(
                        nodesById.get(node.id) as TreeNode
                    );
                }
            } else {
                rootNodes.push(nodesById.get(node.id) as TreeNode);
            }
        });

        return rootNodes;
    }, [data]);

    return {
        treeData,
        isLoading,
        error,
    };
};
