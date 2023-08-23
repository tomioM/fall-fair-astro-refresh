import { defineStaticConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineStaticConfig({
  branch,
  clientId: "4e2aaa09-0e3f-4341-ac6f-e7951adb59b6", // Get this from tina.io
  token: "e1f74df57fab2c19119caf12bfe55ecfa044cef9", // Get this from tina.io
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
        ],
      },
    ],
  },
});
