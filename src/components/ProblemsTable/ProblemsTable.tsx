import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi"; 
import YouTube from "react-youtube";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
import { DBProblem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";

type ProblemsTableProps = {
    setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ setLoadingProblems }) => {
    const [youtubePlayer, setYoutubePlayer] = useState({
        isOpen: false,
        videoId: "",
    });
    const problems = useGetProblems(setLoadingProblems);
    const solvedProblems = useGetSolvedProblems();

    const closeModal = () => {
        setYoutubePlayer({ isOpen: false, videoId: "" });
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);

        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <tbody className='text-white'>
                {problems.map((problem) => {
                    const difficultyColor =
                        problem.difficulty === "Easy"
                            ? "text-dark-green-s"
                            : problem.difficulty === "Medium"
                            ? "text-dark-yellow"
                            : "text-dark-pink";
                    return (
                        <tr 
                            className="bg-dark-layer-1 hover:bg-dark-fill-2 transition-all duration-200 ease-in-out hover:scale-[1.01] border-l-4 border-transparent hover:border-brand-orange shadow-md rounded-none" 
                            key={problem.id}
                        >
                            <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s rounded-none'>
                                {solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='18' />}
                            </th>
                            <td className='px-6 py-4'>
                                <div className="flex items-center gap-2">
                                    {/* 1. Clicking Title opens your workspace clone */}
                                    <Link
                                        className='font-mono font-semibold tracking-tight hover:text-brand-orange cursor-pointer transition duration-150'
                                        href={`/problems/${problem.id}`}
                                    >
                                        {problem.title}
                                    </Link>

                                    {/* 2. Clicking this small icon opens the official leetcode.com url */}
                                    {problem.link && (
                                        <a
                                            href={problem.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-blue-400 transition"
                                            title="Open official LeetCode"
                                        >
                                            <FiExternalLink fontSize={"14"} />
                                        </a>
                                    )}
                                </div>
                            </td>
                            <td className={`px-6 py-4 ${difficultyColor}`}>{problem.difficulty}</td>
                            <td className={"px-6 py-4"}>{problem.category}</td>
                            <td className={"px-6 py-4 rounded-none"}>
                                {problem.videoId ? (
                                    <AiFillYoutube
                                        fontSize={"28"}
                                        className='cursor-pointer hover:text-red-600'
                                        onClick={() =>
                                            setYoutubePlayer({ isOpen: true, videoId: problem.videoId as string })
                                        }
                                    />
                                ) : (
                                    <p className='text-gray-400'>Coming soon</p>
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>

            {/* Video Modal Overlay container updated to <div> to remain syntactically valid in React fragments */}
            {youtubePlayer.isOpen && (
                <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50'>
                    <div
                        className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
                        onClick={closeModal}
                    ></div>
                    <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
                        <div className='w-full h-full flex items-center justify-center relative'>
                            <div className='w-full relative'>
                                <IoClose
                                    fontSize={"35"}
                                    className='cursor-pointer absolute -top-16 right-0 text-white hover:text-brand-orange transition'
                                    onClick={closeModal}
                                />
                                <YouTube
                                    videoId={youtubePlayer.videoId}
                                    loading='lazy'
                                    iframeClassName='w-full min-h-[500px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default ProblemsTable;

function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
    const [problems, setProblems] = useState<DBProblem[]>([]);

    useEffect(() => {
        const getProblems = async () => {
            setLoadingProblems(true);
            const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
            const querySnapshot = await getDocs(q);
            const tmp: DBProblem[] = [];
            querySnapshot.forEach((doc) => {
                tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
            });
            setProblems(tmp);
            setLoadingProblems(false);
        };

        getProblems();
    }, [setLoadingProblems]);
    return problems;
}

function useGetSolvedProblems() {
    const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getSolvedProblems = async () => {
            const userRef = doc(firestore, "users", user!.uid);
            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
                setSolvedProblems(userDoc.data().solvedProblems);
            }
        };

        if (user) getSolvedProblems();
        if (!user) setSolvedProblems([]);
    }, [user]);

    return solvedProblems;
}