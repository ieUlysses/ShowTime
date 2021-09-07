// using Context
//Best use Case

import React, { useContext } from "react";

import { Context } from "../../Context/Context";

// Icons
import { NightsStay, WbSunny } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

export default function () {
    const [context, setContext] = useContext(Context);

    const toggleContext = () => {
        setContext(context === "" ? "active" : "")
    }

    // Setting icon based on status of context
    let icon = null

    let color = null
    if (context === "") {
        color = "yellow"
        icon = <WbSunny />
    } else {
        color = "orange"
        icon = <NightsStay />
    }

    return (
        <div>
            <IconButton
                isRound="true"

                onClick={toggleContext}

            //colorScheme={color}
            >
                {icon}
            </IconButton>
        </div>
    );
}
