export type Item ={
    name: string;
    slug: string;
    discription?: string;
}

export const items:{name:string; items:Item[]}[] = [
    {
        name: "Layouts",
        items: [
            {
                name: "Nested Scroll",
                slug: "/nested-scroll"
            },
            {
                name: "Sliding Sidebar",
                slug: "/sliding-sidebar"
            }
        ]
    },
    {
        name: "Components",
        items: [
            {
                name: "Drag and drop grid",
                slug: "/drag-and-drop-grid"
            },
            {
                name: "Drag and drop list",
                slug: "/drag-and-drop"
            },
            {
                name: "Kanban",
                slug: "/kanban"
            }
        ]
    }
]