import React from "react";
import { useParams } from "react-router-dom";

function Working() {

    const params = useParams();
    console.log('params', params)

    return <div>Working</div>
}

export default Working;