import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas'
import { useState } from 'react';
import { Loading } from './loading';

type Props = {
    onScreenshotTook: (screenshot: string | null)  => void;
    screenshot: string | null
}

export const ScreenshotButton = ({onScreenshotTook, screenshot}: Props) => {
    const [isTakingScrennshot, setIsTakingScreenShot] = useState(false);

    const handleTakeScreenshot = async () => {
        setIsTakingScreenShot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTook(base64image);
        setIsTakingScreenShot(false);
    };

    if (screenshot) {
        return (
            <button
                type='button'
                className='p-1 w-10 h-10 rounded-md flex border-transparent justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
                style={{
                    backgroundImage: `url(${screenshot})`
                }}
                onClick={e => onScreenshotTook(null)}
            >
                 <Trash weight='fill'/>
            </button>
        )
    }

    return (
        <button
            type='button'
            className="p-2 bg-zinc-800 roundend-md border-transparent hover:bg-zinc-700 transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
            onClick={handleTakeScreenshot}
            >
                
            {isTakingScrennshot ? <Loading/> : <Camera className="w-6 h-6"/>}
        </button>
    )
}