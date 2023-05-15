import { Editor } from "@tinymce/tinymce-react";
import { useMemo } from "react";

const getContentStyle = (readOnly: boolean) => `body {
      margin: ${readOnly ? "0px" : "8px"};
      font-size: 13px;
      font-family: Lato,-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Arial,sans-serif;
    }
    .mce-content-body {
      padding: 8px !important;
    }
    .mce-content-body p {
        padding: 0;
        margin: 0;
    }
    .tox-editor-header {
      display: none;
    }
  `;

const allToolbars =
  "blocks | bold italic underline strikethrough blockquote| bullist numlist indent outdent | alignleft aligncenter alignright alignjustify | image | removeformat";

export interface TextEditorProps {
  value?: string;
  onChange?: (newValue: string) => void;
}

export const TinyMceTextEditor = ({ value, onChange }: TextEditorProps) => {
  const editor = useMemo(
    () => (
      <Editor
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        initialValue={value || ""}
        init={{
          height: 600,
          autoresize_bottom_margin: 0,
          branding: false,
          menubar: false,
          plugins: "lists image autoresize paste image",
          images_file_types: "jpg,svg,webp",
          paste_data_images: true,
          toolbar: allToolbars,
          elementpath: false,
        }}
        onEditorChange={onChange}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return <div>{editor}</div>;
};
