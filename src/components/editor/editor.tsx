import Reel from "@bedrock-layout/reel";
import { useRecoilState } from "recoil";
import { EditorAtom } from "../../state";
import styled from "styled-components";

export const Editor = (): JSX.Element => {
    const [input, setInput] = useRecoilState(EditorAtom);

    const onChange = (event: any) => {
        setInput(event.target.value);
        console.log(input)
    };

    return(
        <Reel tabIndex={0}>
            <textarea
                id='editor'
                itemType='text'
                onChange={onChange}
                value={input}
            />
        </Reel>
    );
}