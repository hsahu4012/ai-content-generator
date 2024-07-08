import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';

interface PROPS {
    selectedTemplate?: TEMPLATE;
}
const FormSection = ({ selectedTemplate }: PROPS) => {
    return (
        <div className='p-5 shadow-md border rounded-lg'>
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
            <h2>{selectedTemplate?.name}</h2>
        </div>
    )
}

export default FormSection