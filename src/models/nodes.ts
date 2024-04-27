export interface BaseNode {
    id: string;
    name: string;
    parent: string | null; // Use null for the root node
    height: number;
}

export interface ManagerNode extends BaseNode {
    department: string;
}

export interface DeveloperNode extends BaseNode {
    programmingLanguage: string;
}
