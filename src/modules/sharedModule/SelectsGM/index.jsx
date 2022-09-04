import React, { useState } from "react";
import arrow from "../../assets/arrow.png";
import { 
        WrapperSelect,
        SelectInput,
        WrapperOptions,
        Options
        } from "./styles";

const SelectsGM = ({placeholder, options, width}) => {
    const [selectTextValue = placeholder, setInitialTextValue] = useState();
    const [selectValueOption, setSelectValueOption] = useState();
    const [visibility , setVisibility] = useState(0);
    //console.log(visibility);
    return (
        <WrapperSelect width={width}>
            <SelectInput value={selectValueOption} visibility={visibility} onClick={() => setVisibility(visibility === 0 ? 1: 0)}>
                <span>
                    {selectTextValue}
                </span>
                <img src={arrow} alt="" />
            </SelectInput>
            <WrapperOptions width={width} visibility={visibility}>
                {options.map((item) => (
                    <Options key={item.value} 
                        onClick={
                            () => {
                                setSelectValueOption(item.value);
                                setInitialTextValue(item.value);
                                setVisibility(visibility === 0 ? 1: 0);
                            }
                        } 
                        value={item} oncChange={() => setSelectValueOption(item)}>{item.text}</Options>
                ))}
            </WrapperOptions>
        </WrapperSelect>
    )
}

export default SelectsGM;