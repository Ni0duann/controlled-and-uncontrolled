import { useEffect, useRef, useState } from "react";

interface CalendarProps {
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) =>void
}

function Calendar(props:CalendarProps) {
    const {value: propsValue,defaultValue,onChange} = props;   //propsValue 是重命名
    
    const [value,setValue] = useState(() => {
        if(propsValue !== undefined) {
            return propsValue;
        } else {
            return defaultValue;
        }
    })
    const isFirstRender = useRef(true);

    useEffect(()=> {
        if(propsValue === undefined && !isFirstRender.current) {
            setValue(propsValue)
        }
        isFirstRender.current = false;
    },[propsValue])

    const mergedValue = propsValue === undefined ? value : propsValue;

    function changeValue(date: Date) {
        if(propsValue === undefined) {
            setValue(date)
        }
        onChange?.(date);
    }

    return (
        <div>
            {mergedValue?.toLocaleDateString()}
            <div onClick={() => {changeValue(new Date('2024-12-1'))}}>2024-12-1</div>
            <div onClick={() => {changeValue(new Date('2024-12-2'))}}>2024-12-2</div>
            <div onClick={() => {changeValue(new Date('2024-12-3'))}}>2024-12-3</div>
        </div>
    )
}

export default Calendar