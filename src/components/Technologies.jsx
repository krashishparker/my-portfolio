
import {RiReactjsLine} from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiKubernetes } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
    <div className="flex flex-wrap items-center justify-center gap-4">
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiSpringboot  className="text-7xl text-green-400"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaJava  className="text-7xl text-blue-400"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <RiReactjsLine  className="text-7xl text-cyan-400"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <BiLogoPostgresql  className="text-7xl text-sky-700"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <SiKubernetes  className="text-7xl text-blue-700"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
    <FaGitlab  className="text-7xl text-orange-700"/>
    </div>
    </div>
    </div>

  );
};

export default Technologies
