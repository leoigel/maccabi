import React from 'react'
import { wait } from '../../utils/wait'
async function Loading() {
    await wait(3000)
    return (
        <div>NO LOADISddd</div>
    )
}

export default Loading