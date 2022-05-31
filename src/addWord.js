import React from "react";
import { useHistory } from "react-router-dom";

const AddWord = () => {
    const history = useHistory();

    return (
        <div>
            단어 추가하기
            <button onClick={() => {history.goBack();}}>뒤로가기</button>
        </div>

      
    )
}

export default AddWord