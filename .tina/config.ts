import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,
  clientId: "e04b4f16-a16e-41d2-bb70-70f5d743e540", // Get this from tina.io
  token: "89c08aaf161ed4f3a24c8a3f1017933125a5dc16", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "yaml",
        ui: {
          router: (props) => {
            return '/'
          },
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: 'number',
            name: 'year',
            label: 'Year',
          },
          {
            type: "string",
            name: "byline",
            label: "Byline",
          },
          {
            type: "string",
            name: "subheading",
            label: "Subheading",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            label: "Hero Buttons",
            name: "heroLinks",
            type: "object",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.name}  ( ${item?.url} ) `}
              },
              // Setting a default will auto-populate new items with the given values
              defaultItem: {
                url: "https://www.facebook.com/",
                name: "Facebook",
              }
            },
            fields: [
              {
                label: "Name",
                name: "name",
                type: "string"
              },
              {
                label: "URL",
                name: "url",
                type: "string"
              },
            ]
          },
          {
            label: "Navigation Buttons",
            name: "navLinks",
            type: "object",
            list: true,
            ui: {
              // This allows the customization of the list item UI
              // Data can be accessed by item?.<Name of field>
              itemProps: (item) => {
                return { label: `${item?.name}  ( ${item?.url} ) `}
              },
              // Setting a default will auto-populate new items with the given values
              defaultItem: {
                url: "https://www.facebook.com/",
                name: "Facebook",
              }
            },
            fields: [
              {
                label: "Name",
                name: "name",
                type: "string"
              },
              {
                label: "URL",
                name: "url",
                type: "string"
              },
            ]
          },
          {
            type: "object",
            name: "exhibition",
            label: "Exhibition",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
              },
            ]
          },
          {
            type: "object",
            name: "competition",
            label: "Competition",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
              },
            ]
          },
          {
            type: "object",
            name: "race",
            label: "Squash Race",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
              },
            ]
          },
          {
            type: "object",
            name: "booths",
            label: "Call for Booths",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "rich-text",
                name: "text",
                label: "Text",
              },
            ]
          },
          {
            label: "Footer",
            name: "footer",
            type: "object",
            fields: [
              {
                label: "Contacts",
                name: "contacts",
                type: "object",
                list: true,
                ui: {
                  // This allows the customization of the list item UI
                  // Data can be accessed by item?.<Name of field>
                  itemProps: (item) => {
                    return { label: `${item?.heading}`}
                  },
                  // Setting a default will auto-populate new items with the given values
                  defaultItem: {
                    heading: "Email",
                  }
                },
                fields: [
                  {
                    label: "Title",
                    name: "heading",
                    type: "string"
                  },
                  {
                    label: "Links",
                    name: "links",
                    type: "object",
                    list: true,
                    ui: {
                      // This allows the customization of the list item UI
                      // Data can be accessed by item?.<Name of field>
                      itemProps: (item) => {
                        return { label: `${item?.name}  ( ${item?.url} ) `}
                      },
                      // Setting a default will auto-populate new items with the given values
                      defaultItem: {
                        url: "https://www.facebook.com/",
                        name: "Facebook",
                      }
                    },
                    fields: [
                      {
                        label: "Name",
                        name: "name",
                        type: "string"
                      },
                      {
                        label: "URL",
                        name: "url",
                        type: "string"
                      },
                    ]
                  }
                ]
              },
              {
                label: "Credits",
                name: "credits",
                type: "object",
                list: true,
                ui: {
                  // This allows the customization of the list item UI
                  // Data can be accessed by item?.<Name of field>
                  itemProps: (item) => {
                    return { label: `${item?.heading}`}
                  },
                  // Setting a default will auto-populate new items with the given values
                  defaultItem: {
                    heading: "Role",
                  }
                },
                fields: [
                  {
                    label: "Title",
                    name: "heading",
                    type: "string"
                  },
                  {
                    label: "Links",
                    name: "links",
                    type: "object",
                    list: true,
                    ui: {
                      // This allows the customization of the list item UI
                      // Data can be accessed by item?.<Name of field>
                      itemProps: (item) => {
                        return { label: `${item?.name}  ( ${item?.url} ) `}
                      },
                      // Setting a default will auto-populate new items with the given values
                      defaultItem: {
                        url: "https://www.facebook.com/",
                        name: "Facebook",
                      }
                    },
                    fields: [
                      {
                        label: "Name",
                        name: "name",
                        type: "string"
                      },
                      {
                        label: "URL",
                        name: "url",
                        type: "string"
                      },
                    ]
                  }
                ]
              },
              {
                label: "Socials",
                name: "socials",
                type: "object",
                list: true,
                ui: {
                  // This allows the customization of the list item UI
                  // Data can be accessed by item?.<Name of field>
                  itemProps: (item) => {
                    return { label: `${item?.heading}`}
                  },
                  // Setting a default will auto-populate new items with the given values
                  defaultItem: {
                    heading: "",
                  }
                },
                fields: [
                  {
                    label: "Title",
                    name: "heading",
                    type: "string"
                  },
                  {
                    label: "Links",
                    name: "links",
                  type: "object",
                  list: true,
                  ui: {
                      // This allows the customization of the list item UI
                      // Data can be accessed by item?.<Name of field>
                      itemProps: (item) => {
                        return { label: `${item?.name}  ( ${item?.url} ) `}
                      },
                      // Setting a default will auto-populate new items with the given values
                      defaultItem: {
                        url: "https://www.facebook.com/",
                        name: "Facebook",
                      }
                    },
                    fields: [
                      {
                        label: "Name",
                        name: "name",
                        type: "string"
                      },
                      {
                        label: "URL",
                        name: "url",
                          type: "string"
                        },
                      ]
                  }
                ]
              },
            ]
          },
        ],
      },
    ],
  },
});
