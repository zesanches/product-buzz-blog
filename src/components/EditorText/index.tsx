import { cn } from "@/lib/utils";
import { Editor, EditorTextChangeEvent } from "primereact/editor";

type Props = {
  onChange: (text: string | null) => void;
  value?: string;
  error?: string;
  className?: string;
};

export const EditorText = ({ onChange, className, ...props }: Props) => {
  return (
    <Editor
      onTextChange={(e: EditorTextChangeEvent) => onChange(e.htmlValue)}
      value={props.value || ""}
      style={{ height: "320px" }}
      {...props}
    />
  );
};
