import { useQuery } from "react-query";
import { fetchNodeChildren } from "../../api/fetchNotes";

export function useNodeChildren(nodeId: number) {
    const { data, error, isLoading, isFetching } = useQuery(
        ["nodeChildren", nodeId],
        () => fetchNodeChildren(nodeId),
        {
            enabled: !!nodeId,
        }
    );

    return {
        children: data,
        isLoading,
        isFetching,
        error,
    };
}
