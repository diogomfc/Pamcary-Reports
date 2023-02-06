import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Path, UseFormRegister } from 'react-hook-form'


interface TextAreaEditorProps{
  value?: string;
  onChange?: (value: string) => void;
  register: UseFormRegister<any>;
  name: Path<any>;
}

export function TextAreaEditor({value, onChange,register,name, ...props}: TextAreaEditorProps){

  return(
      <div>
          <ReactQuill 
          style={{ 
            width: 1010, 
            height: '100%'
          }}
          theme="snow" 
          value={value} 
          onChange={onChange}
          {...props}
          />
      </div>
  );
}