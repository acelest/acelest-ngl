import Image from "next/image";
import Link from "next/link";
import { ngl } from "@/ngl";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-400 to-sky-400 min-h-screen flex items-center overflow-hidden">
      <section className="bg-white py-24 relative">
        <div className="absolute right-0 top-0 min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-sky-400/5 -translate-y-[40%] translate-x-[40%]">
          <div className="inset-[10%] rounded-full bg-gradient-to-l from-sky-400/20">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-sky-400/30" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-12">
          <div className="text-center">
            <h1 className="font-bold text-4xl text-gray-800 mb-6">
              Réponses de Aubin aux questions anonymes
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                className="w-full sm:w-fit bg-red-500 hover:bg-red-600 duration-300 rounded-lg px-8 py-3 flex items-center justify-center text-white"
                target="_blank"
                href="https://ngl.link/acelestdev"
              >
                Pose moi une question
              </Link>
              <Link
                className="w-full sm:w-fit bg-sky-500 hover:bg-sky-600 duration-300 rounded-lg px-8 py-3 flex items-center justify-center text-white"
                target="_blank"
                href="https://twitter.com/acelestcode"
              >
                Follow me !
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngl.map((ngl, index) => (
              <div
                key={index}
                className="p-5 md:p-6 space-y-6 rounded-lg bg-white border border-gray-200 shadow-lg hover:border-sky-500"
              >
                <p className="font-medium text-lg text-gray-700">
                  “ {ngl.question} ”
                </p>
                <div className="flex items-start gap-4">
                  <div className="border-2 border-red-300 rounded-full flex items-center justify-center">
                    <Image
                      src="/me.jpg"
                      width={1900}
                      height={1200}
                      alt="Author avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 bg-slate-100 p-4 rounded-md">
                    <p className="text-gray-700">{ngl.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
