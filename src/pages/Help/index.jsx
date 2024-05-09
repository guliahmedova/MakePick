import { useState } from "react";
import { questions } from "@/shared/media/const/questions";

const Help = () => {
    const [selected, setSelected] = useState(null);

    const toggleAccordion = (index) => {
        if (selected === index) {
            return setSelected(null);
        } else {
            setSelected(index);
        }
    };

    return (
        <div className="h-[100vh] flex flex-col items-center justify-center bg-gray-100">
            <h4 className="text-center font-bold text-2xl mb-4">F.A.Q</h4>
            <div className="bg-white rounded shadow mx-4">
                {questions?.map((question) => (
                    <div className="relative" key={question.id}>
                        <h6 className="mb-0">
                            <button
                                className={`relative flex items-center w-full justify-between p-4 font-semibold text-left transition-all ease-in ${question.id === questions[questions.length - 1].id ? 'border-none' : 'border-b shadow-md'} cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500`}
                                data-collapse-target="collapse-1" onClick={() => toggleAccordion(question.id)}
                            >
                                <span className="text-sm lg:text-lg w-44 lg:w-auto">{question.question}</span>
                                <div className="pt-1 lg:text-3xl text-lg font-bold">
                                    {selected === question.id ? '-' : '+'}
                                </div>
                            </button>
                        </h6>
                        <div
                            data-collapse="collapse-1"
                            className={`${selected === question.id ? 'h-20 overflow-visible' : 'h-0 overflow-hidden'} transition-all bg-gray-50 border duration-300 ease-in-out`}
                        >
                            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                                {question.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Help