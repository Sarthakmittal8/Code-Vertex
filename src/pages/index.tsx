import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";
import React, { useState } from "react"; 

// Import your Firebase tools using your exact variable name
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase"; 

export default function Home() {
    const [loadingProblems, setLoadingProblems] = useState(true);
    const hasMounted = useHasMounted();

    // Inputs state management
    const [inputs, setInputs] = useState({
        id: "",
        title: "",
        category: "",
        difficulty: "",
        videoId: "",
        link: "",
        order: 0,
        likes: 0,
        dislikes: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newProblem = {
            ...inputs,
            order: Number(inputs.order),
        };

        try {
            await setDoc(doc(firestore, "problems", inputs.id), newProblem);
            alert("Saved to DB successfully!");
            setInputs({ id: "", title: "", category: "", difficulty: "", videoId: "", link: "", order: 0, likes: 0, dislikes: 0 });
        } catch (error) {
            console.error("Error saving to DB:", error);
            alert("Something went wrong!");
        }
    };

    if (!hasMounted) return null;

    return (
        <>
            <main className='bg-dark-layer-2 min-h-screen pb-20'>
                <Topbar />

                <h1
                    className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
                    uppercase mt-10 mb-5'
                >
                    &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
                </h1>
                
                {/* Main Problems Table Container */}
                <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
                    {loadingProblems && (
                        <div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
                            {[...Array(10)].map((_, idx) => (
                                <LoadingSkeleton key={idx} />
                            ))}
                        </div>
                    )}
                    <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
                        {!loadingProblems && (
                            <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
                                <tr>
                                    <th scope='col' className='px-1 py-3 w-0 font-medium'>Status</th>
                                    <th scope='col' className='px-6 py-3 w-0 font-medium'>Title</th>
                                    <th scope='col' className='px-6 py-3 w-0 font-medium'>Difficulty</th>
                                    <th scope='col' className='px-6 py-3 w-0 font-medium'>Category</th>
                                    <th scope='col' className='px-6 py-3 w-0 font-medium'>Solution</th>
                                </tr>
                            </thead>
                        )}
                        <ProblemsTable setLoadingProblems={setLoadingProblems} />
                    </table>
                </div>

                <hr className="border-gray-800 my-12 max-w-[1200px] mx-auto" />

                {/* ==================== CORRECTED ADMIN PANEL AT THE BOTTOM ==================== */}
                <div className='max-w-md mx-auto my-10 px-4'>
                    
                    {/* YouTube Video Section: 100% isolated layout block with separate z-index handling */}
                    {inputs.videoId && (
                        <div className="mb-6 aspect-video rounded-none overflow-hidden shadow-2xl bg-black border border-gray-700 relative z-10">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${inputs.videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {/* White Input Fields Card: Completely separated from the video element */}
                    <div className='p-6 bg-white text-black rounded shadow-xl'>
                        <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">Admin: Add New Problem</h3>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                            <input className='border p-2 rounded text-sm bg-gray-50' type='text' placeholder='Problem ID slug' name='id' value={inputs.id} onChange={handleInputChange} required />
                            <input className='border p-2 rounded text-sm bg-gray-50' type='text' placeholder='Title' name='title' value={inputs.title} onChange={handleInputChange} required />
                            <input className='border p-2 rounded text-sm bg-gray-50' type='text' placeholder='Difficulty' name='difficulty' value={inputs.difficulty} onChange={handleInputChange} required />
                            <input className='border p-2 rounded text-sm bg-gray-50' type='text' placeholder='Category' name='category' value={inputs.category} onChange={handleInputChange} required />
                            <input className='border p-2 rounded text-sm bg-gray-50' type='text' placeholder='Order Number' name='order' value={inputs.order || ""} onChange={handleInputChange} required />
                            <input className='border p-2 rounded text-sm bg-orange-50' type='text' placeholder='YouTube Video ID (e.g. 2g811Eo7K8U)' name='videoId' value={inputs.videoId} onChange={handleInputChange} />
                            <input className='border p-2 rounded text-sm bg-gray-50' type='text' placeholder='LeetCode Link' name='link' value={inputs.link} onChange={handleInputChange} />
                            <button type='submit' className='bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition duration-200 mt-2'>Save to Firestore</button>
                        </form>
                    </div>
                </div>
                {/* =========================================================================== */}
            </main>
        </>
    );
}

// Inside pages/index.tsx (Your homepage loading structure)
const LoadingSkeleton = () => {
    return (
        <div className='flex items-center space-x-12 mt-4 px-6 animate-pulse'>
            {/* Status dot circle skeleton slot */}
            <div className='w-6 h-6 shrink-0 rounded-full bg-dark-fill-2 border border-dark-divider-border-2 opacity-60'></div>
            {/* Row text column blocks */}
            <div className='h-4 sm:w-52 w-32 rounded-none bg-dark-fill-2 border border-dark-divider-border-2 opacity-60'></div>
            <div className='h-4 sm:w-52 w-32 rounded-none bg-dark-fill-2 border border-dark-divider-border-2 opacity-60'></div>
            <div className='h-4 sm:w-52 w-32 rounded-none bg-dark-fill-2 border border-dark-divider-border-2 opacity-60'></div>
            <span className='sr-only'>Loading...</span>
        </div>
    );
};