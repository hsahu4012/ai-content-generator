import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS {
    aiOutput: string;
}
const OutputSection = ({ aiOutput }: PROPS) => {
    const editorRef: any = useRef();

    useEffect(() => {
        const editorInstance = editorRef.current.getInstance();
        editorInstance.setMarkdown(aiOutput);
    }, [aiOutput])

    const handleChange = () => {
        if (editorRef.current && typeof editorRef.current.getInstance === 'function') {
            console.log(editorRef.current.getInstance().getMarkdown());
        } else {
            console.error('Editor instance is not available or method does not exist');
        }
    };

    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-lg'>Your Result</h2>
                <Button className='flex gap-2'><Copy className='w-4 h-4 ' /> Copy</Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Your Result will appear here"
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                onChange={handleChange}
            />
        </div>
    );
}

export default OutputSection;
