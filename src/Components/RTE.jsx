import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "Welcome To TinyM" }) {


  return (
    <div className="w-fulll">
      {label && <label className="inline-block mb-1 my-1">
        {label}
      </label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (

          <Editor
            apiKey='nkd1ut2keszrnj7c8vm2itoqkjwohso4gr4stlcda435l3d0'
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                ' advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>

  );
}
