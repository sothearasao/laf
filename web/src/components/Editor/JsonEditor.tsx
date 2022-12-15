import Editor from "@monaco-editor/react";

export default function JsonEditor(props: {
  value: string;
  height?: string;
  onChange?: (value: string | undefined) => void;
}) {
  const { value } = props;

  function handleEditorWillMount(monaco: any) {
    monaco?.editor.defineTheme("jsonEditorTheme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editorLineNumber.foreground": "#aaa",
        "editorOverviewRuler.border": "#fff",
        "editor.lineHighlightBackground": "#fff",
        "scrollbarSlider.background": "#E8EAEC",
        "editorIndentGuide.activeBackground": "#ddd",
        "editorIndentGuide.background": "#eee",
      },
    });
  }

  return (
    <Editor
      defaultLanguage="json"
      value={JSON.stringify(JSON.parse(value), null, 2) || ""}
      height={props.height || "100%"}
      onChange={(value, event) => {
        props.onChange && props.onChange(value);
      }}
      onMount={(editor, monaco) => {
        monaco.editor.setTheme("jsonEditorTheme");
      }}
      beforeMount={handleEditorWillMount}
      options={{
        lineNumbers: "off",
        guides: {
          indentation: false,
        },
        minimap: {
          enabled: false,
        },
        scrollbar: {
          verticalScrollbarSize: 0,
          alwaysConsumeMouseWheel: false,
        },
        lineNumbersMinChars: 0,
        fontSize: 14,
        scrollBeyondLastLine: false,
        folding: false,
        overviewRulerBorder: false,
        tabSize: 2, // tab 缩进长度
      }}
    />
  );
}