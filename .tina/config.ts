import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD

export default defineConfig({
  clientId: "e04b4f16-a16e-41d2-bb70-70f5d743e540", // Get this from tina.io
  token: "89c08aaf161ed4f3a24c8a3f1017933125a5dc16", // Get this from tina.io
  branch,
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
        ],
      },
    ],
  },
});
