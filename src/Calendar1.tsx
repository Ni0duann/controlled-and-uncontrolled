import { useState } from "react";

interface CalendarProps {
    defaultValue?: Date;
    onChange?: (date:Date) => void
}


//非受控模组件

function Calendar(props:CalendarProps) {
    const {defaultValue,onChange} = props;
    const [value,setValue] = useState(defaultValue);

    function changeValue(date:Date) {
        setValue(date);
        onChange?.(date)
    }

    return (
        <div>
            {value?.toLocaleDateString()}
            <div onClick={() => {changeValue(new Date('2024-12-1'))}}>2024-12-1</div>
            <div onClick={() => {changeValue(new Date('2024-12-2'))}}>2024-12-2</div>
            <div onClick={() => {changeValue(new Date('2024-12-3'))}}>2024-12-3</div>
        </div>
    )
}

export default Calendar