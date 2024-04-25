
import { useRef } from "react"

export default function SuccessEmailModal({isSuccess, setIsSuccess}) {
    const modal = useRef()
    if(isSuccess && modal.current) {
        modal.current.showModal();
    }
    return (
        <dialog ref={modal} className={`${!isSuccess ? "hidden" : "flex"} w-1/2 p-6 rounded-2xl shadow-smooth flex-col gap-4 justify-center items-center`}>
            <h1 className="text-[1.5rem] font-semibold">Thank you for reaching out!</h1>
            <h3>I will be in touch as soon as possible!</h3>
            <form method="dialog">
                <button type="submit" className="w-fit mt-6 py-2 px-8 bg-red rounded-full text-white hover:bg-black hover:shadow-md transition-all duration-300" onClick={() => setIsSuccess(false)}>Okay</button>
            </form>
        </dialog>
    )
}
