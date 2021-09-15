import React, { useContext } from "react";
import { userContext } from "../App";

const Reader = () => {
return(
    <div>
      <h1>  I am use context person </h1>
      <userContext.Consumer>
          {value=> <div>{value}</div>}
      </userContext.Consumer>
    </div>
)

}

export default Reader;