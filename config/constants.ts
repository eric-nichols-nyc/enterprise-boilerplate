export type Item ={
    name: string;
    slug: string;
    discription?: string;
}

export const siteConfig = {
    components: [
        {
            title: "Buttons",
            href: "/components/buttons"
        },
        {
            title: "Forms",
            href: "/components/forms"
        },
        {
            title: "Alert Dialog",
            href: "/components/alert-dialog"
        },
        {
            title: "Typography",
            href: "/components/typography"
        },
        {
            title: "Kanban",
            href: "/components/kanban"
        },
        {
            title: "Chat",
            href: "/components/chat"
        },
        {
            title: "Carousel",
            href: "/components/carousel"
        },   {
            title: "Cards",
            href: "/components/cards"
        }
    ],
    mainNav: [
        {
            title: "Home",
            href: "/",
       
        },
        {
            title: "Components",
            href: undefined,
            items: [
                {
                    title: "Buttons",
                    href: "/components/buttons"
                },
                {
                    title: "Forms",
                    href: "/components/forms"
                },
                {
                    title: "Cards",
                    href: "/components/cards"
                },
                {
                    title: "Modals",
                    href: "/components/modals"
                },
                {
                    title: "Layouts",
                    href: "/components/layouts"
                },
                {
                    title: "Navigation",
                    href: "/components/navigation"
                },
                {
                    title: "Tables",
                    href: "/components/tables"
                },
                {
                    title: "Toasts",
                    href: "/components/toasts"
                },
                {
                    title: "Typography",
                    href: "/components/typography"
                }
            ]
        },
        {
            title: "Layouts",
            href: undefined,
            items: [
                {
                    title: "Auth",
                    href: "/layouts/auth"
                },
                {
                    title: "Components",
                    href: "/layouts/components"
                },
                {
                    title: "Dashboard",
                    href: "/layouts/dashboard"
                },
                {
                    title: "Landing",
                    href: "/layouts/landing"
                },
                {
                    title: "Profile",
                    href: "/layouts/profile"
                }
            ]
        }
    ]
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
                name: "Buttons",
                slug: "/components/buttons"
            },
            {
                name: "Drag and drop grid",
                slug: "/components/drag-and-drop-grid"
            },
            {
                name: "Drag and drop list",
                slug: "/components/drag-and-drop"
            },
            {
                name: "Kanban",
                slug: "/components/kanban"
            },
            {
                name: "Table",
                slug: "/components/table"
            },
            {
                name: "Tabs",
                slug: "/components/tabs"
            },
            {
                name: "Tooltip",
                slug: "/components/tooltip"
            },
            {
                name: "Tree",
                slug: "/components/tree"
            },
            {
                name: "Typography",
                slug: "/components/typography"
            },
            {
                name: "Alert Dialog",
                slug: "/components/alert-dialog"
            },
            {
                name: "Hover Card",
                slug: "/components/hover-card"
            },
            {
                name: "Progress",
                slug: "/components/progress"
            },
            {
                name: "Scroll-area",
                slug: "/components/scroll-area"
            },
            {
                name: "Tabs",
                slug: "/components/tabs"
            },
            {
                name: "Tooltip",
                slug: "/components/tooltip"
            },
            {
                name: "Alert Dialog",
                slug: "/components/alert-dialog"
            },
            {
                name: "Hover Card",
                slug: "/components/hover-card"
            },
            {
                name: "Progress",
                slug: "/components/progress"
            },
            {
                name: "Scroll-area",
                slug: "/components/scroll-area"
            },
            {
                name: "Tabs",
                slug: "/components/tabs"
            },
            {
                name: "Tooltip",
                slug: "/components/tooltip"
            },
            {
                name: "Alert Dialog",
                slug: "/components/alert-dialog"
            },
            {
                name: "Hover Card",
                slug: "/components/hover-card"
            },
            {
                name: "Progress",
                slug: "/components/progress"
            },
            {
                name: "Scroll-area",
                slug: "/components/scroll-area"
            },
            {
                name: "Tabs",
                slug: "/components/tabs"
            },
            {
                name: "Tooltip",
                slug: "/components/tooltip"
            },
            {
                name: "Alert Dialog",
                slug: "/components/alert-dialog"
            },
            {
                name: "Hover Card",
                slug: "/components/hover-card"
            },
            {
                name: "Progress",
                slug: "/components/progress"
            },
            {
                name: "Scroll-area",
                slug: "/components/scroll-area"
            },
            {
                name: "Tabs",
                slug: "/components/tabs"
            },
            {
                name: "Tooltip",
                slug: "/components/tooltip"
            },
            {
                name: "Alert Dialog",
                slug: "/components/alert-dialog"
            },
            {
                name: "Hover Card",
                slug: "/components/hover-card"
            },
            {
                name: "Progress",
                slug: "/components/progress"
            },
            {
                name: "Scroll-area",
                slug: "/components/scroll-area"
            },
            {
                name: "Tabs",
                slug: "/components/tabs"
            },
            {
                name: "Tooltip",
                slug: "/components/tooltip"
            },
            {
                name: "Alert Dialog",
                slug: "/components/alert-dialog"
            },
            {
                name: "Hover Card",
                slug: "/components/hover-card"
            },
            {
                name: "Progress",
                slug: "/components/progress"
            },
            {
                name: "Scroll-area",
                slug: "/components/scroll-area"
            }
        ]
    }
]

export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]