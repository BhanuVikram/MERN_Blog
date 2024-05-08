import React, { useState, useEffect } from "react";
import { EditorProvider, EditorContent, useEditor } from "@tiptap/react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import HardBreak from "@tiptap/extension-hard-break";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import "../../styles/componentsStyles/adminComponentsStyles/createBlogpostComponentStyles.scss";
import { FiBold } from "react-icons/fi";
import { FiUnderline } from "react-icons/fi";
import { FiItalic } from "react-icons/fi";
import { GoStrikethrough } from "react-icons/go";
import { LuRemoveFormatting } from "react-icons/lu";
import { MdHorizontalRule } from "react-icons/md";
import { LuHeading1 } from "react-icons/lu";
import { LuHeading2 } from "react-icons/lu";
import { LuHeading3 } from "react-icons/lu";
import { LuHeading4 } from "react-icons/lu";
import { LuHeading5 } from "react-icons/lu";
import { LuHeading6 } from "react-icons/lu";
import { PiListBulletsFill } from "react-icons/pi";
import { MdFormatListNumbered } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { PiCodeBlockFill } from "react-icons/pi";
import { GrBlockQuote } from "react-icons/gr";
import { AiOutlineNodeCollapse } from "react-icons/ai";
import { IoMdReturnLeft } from "react-icons/io";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";

const accessToken = localStorage.getItem("accessToken");
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar">
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FiBold />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <FiUnderline />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FiItalic />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <GoStrikethrough />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().unsetAllMarks().run();
        }}
      >
        <LuRemoveFormatting />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().clearNodes().run();
        }}
      >
        <AiOutlineNodeCollapse />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <LuHeading1 />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <LuHeading2 />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <LuHeading3 />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 4 }).run();
        }}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        <LuHeading4 />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 5 }).run();
        }}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        <LuHeading5 />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 6 }).run();
        }}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        <LuHeading6 />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <PiListBulletsFill />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <MdFormatListNumbered />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBlockquote().run();
        }}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <GrBlockQuote />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setHorizontalRule().run();
        }}
      >
        <MdHorizontalRule />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().undo().run();
        }}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <BiUndo />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().redo().run();
        }}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <BiRedo />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleCode().run();
        }}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        <FaCode />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleCodeBlock().run();
        }}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <PiCodeBlockFill />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setHardBreak().run();
        }}
      >
        <IoMdReturnLeft />
      </button>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Underline,
  Code.configure({
    HTMLAttributes: {
      class: "inline-code",
    },
  }),
  CodeBlock.configure({
    HTMLAttributes: {
      class: "code-block",
    },
  }),
  HardBreak.extend({
    addKeyboardShortcuts() {
      return {
        Enter: () => this.editor.commands.setHardBreak(),
      };
    },
  }),
];

const CreateBlogpostComponent = () => {
  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [isTitle, setIsTitle] = useState(false);
  const [isContent, setIsContent] = useState(false);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "editor-content",
      },
    },
    extensions,
    content: editorContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  useEffect(() => {
    setIsTitle(title.length > 1 && title.length < 121);
  }, [title]);

  useEffect(() => {
    setIsContent(editorContent.length > 99 && editorContent.length < 100001);
  }, [editorContent]);

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        onSubmit={(values) => {
          const updatedValues = {
            ...values,
            title,
            content: editorContent,
          };

          if (isTitle && isContent) {
            axios
              .post(
                `http://localhost:8000/api/v1/createblogpost`,
                updatedValues,
                {
                  headers,
                }
              )
              .then((res) => {
                console.log(res.message);
                window.location.reload();
              })
              .catch((error) => {
                console.log(error.message);
              });
          }
        }}
      >
        <Form className="create-blogpost-form">
          <div className="blogpost-title">
            <label htmlFor="title">Enter Blogpost Title</label>
            <Field
              type="text"
              name="title"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {!isTitle && (
              <div className="error-message">
                * Title must be between 2 and 120 characters!
              </div>
            )}
          </div>
          <div className="blogpost-content">
            <label htmlFor="content">Enter Blogpost Content</label>
            <div className="blogpost-content-inner">
              <EditorProvider
                slotBefore={<MenuBar editor={editor} />}
                extensions={extensions}
                content={editorContent}
                onUpdate={({ editor }) => {
                  setEditorContent(editor.getHTML());
                }}
              >
                <EditorContent editor={editor} />
              </EditorProvider>
            </div>
            {!isContent && (
              <div className="error-message">
                * Content must be between 100 and 100,000 characters!
              </div>
            )}
          </div>
          <button
            disabled={!isTitle || !isContent}
            type="submit"
            className={!isTitle || !isContent ? "disabled" : "submit"}
          >
            Publish
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateBlogpostComponent;
