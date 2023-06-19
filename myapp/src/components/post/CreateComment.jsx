import React, { useRef } from "react";
import useComment from "@/hook/useComment";
import { Form, Input } from "antd";
const CreateComment = (props) => {
  const { postId, parentId, data, onCheckContentTrue, onCheckContentFalse  } = props;
  const { createComment } = useComment();
  const formRef=useRef()
  const [form]=Form.useForm()
  const { TextArea } = Input;
  const handleCreateComment = ( values) => {
    const data = { ...values, postId: postId, parentId: parentId };
    createComment(data);
    // form.resetFields()
    onCheckContentFalse
  };
  const onFinish=(values)=>{  
      handleCreateComment(values)  
  }
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // prevent the default behavior of textarea
      formRef.current.submit() 
    }
  };
  return (
    <div>
      <div className="border-b-[0.5px] border-solid p-2 border-gray-400">
        <i className="font-bold">
          {data?.length}
          {data?.length > 1 ? " comments" : " comment"}
        </i>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        ref={formRef}
        onKeyDown={handleKeyDown}
      >
        <Form.Item 
         name="contentComment"
        >
          <TextArea
           
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: 'none',
            }}
            onChange={onCheckContentTrue}
            placeholder="Enter comment"            
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateComment;
