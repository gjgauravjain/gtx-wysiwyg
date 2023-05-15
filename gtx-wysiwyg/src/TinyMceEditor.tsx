import { Editor } from "@tinymce/tinymce-react";
import { useMemo } from "react";
const allToolbars =
  "blocks | bold italic underline strikethrough blockquote| bullist numlist indent outdent | alignleft aligncenter alignright alignjustify | quickimage | removeformat";

export interface TextEditorProps {
  value?: string;
}

export const TinyMceTextEditor = ({ value }: TextEditorProps) => {
  const onChange = (newValue: string) => {
    console.log("onChange", newValue);
  };

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
          plugins: "lists image autoresize paste quickbars",
          images_file_types: "jpg,svg,webp",
          paste_data_images: true,
          toolbar: allToolbars,
          elementpath: false,
          quickbars_insert_toolbar: false,
        }}
        onEditorChange={onChange}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return <div>{editor}</div>;
};
