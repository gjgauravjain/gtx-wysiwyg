import { Editor } from "@tinymce/tinymce-react";
import { useMemo } from "react";
const allToolbars =
  "blocks | bold italic underline strikethrough blockquote| bullist numlist indent outdent | alignleft aligncenter alignright alignjustify | image | removeformat";

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
          plugins: "lists image autoresize paste image",
          images_file_types: "jpg,svg,webp",
          paste_data_images: true,
          toolbar: allToolbars,
          elementpath: false,
          image_description: false,
          image_dimensions: false,
          file_picker_callback: function (callback, value, meta) {
            // Provide file and text for the link dialog
            if (meta.filetype == "file") {
              callback("mypage.html", { text: "My text" });
            }

            // Provide image and alt text for the image dialog
            if (meta.filetype == "image") {
              callback("myimage.jpg", { alt: "My alt text" });
            }

            // Provide alternative source and posted for the media dialog
            if (meta.filetype == "media") {
              callback("movie.mp4", {
                source2: "alt.ogg",
                poster: "image.jpg",
              });
            }
          },
        }}
        onEditorChange={onChange}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return <div>{editor}</div>;
};
