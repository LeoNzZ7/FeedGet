import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../closeButton"
import { FeedbackType, feedbackTypes } from "../index";

type Props = {
    feedbackType: FeedbackType
    onFeedbackRestart: () => void
}

export const FeedbackContentStep = ({feedbackType, onFeedbackRestart}: Props ) => {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <>
        <header>
            <button onClick={onFeedbackRestart} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" > 
                <ArrowLeft weight="bold" className="h-4 w-4" />
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
            <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} />
            {feedbackTypeInfo.title}
            </span>
            <CloseButton/>
        </header>
       
        <form className="my-4 w-full">
            <textarea 
            className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus: ring-1 resize-none outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte com detalhes o que está acontecendo..."
            />
        </form>
        </>
    )
}