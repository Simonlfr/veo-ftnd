export async function fetchNodeChildren(nodeId: number) {
    const response = await fetch(
        `http://localhost:3000/employees/${nodeId}/children`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}
