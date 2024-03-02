import React, { useState, useMemo, useEffect } from 'react'

const useWidthParams = (params) => {
    const [width, setWidth] = useState(params)

    useMemo(() => {
        let calcWidth = Math.abs(params.pageID * 100) / 3
        setWidth(calcWidth)
    }, [params]);
    return { width, params }
}

export default useWidthParams;