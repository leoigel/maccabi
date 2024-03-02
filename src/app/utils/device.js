
import { headers } from 'next/headers';

export const detectDevice = async () => {
    const headersList = headers();
    const userAgent = headersList.get('user-agent');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    // Return 'mobile' if the userAgent indicates a mobile device, otherwise return 'desktop'
    return isMobile ? 'mobile' : null;

}
