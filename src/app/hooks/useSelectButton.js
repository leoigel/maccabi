import React, { useState } from 'react'

const useSelectButton = (activeButton) => {
    const [id, setId] = useState(activeButton);

    const updateID = (id) => {
        setId(id)

    }
    return { updateID, id }

}

export default useSelectButton;