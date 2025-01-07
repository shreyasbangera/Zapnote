"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCreateNote = () => {
    const noteId = nanoid();
    router.push(`/note/${noteId}`);
  };

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <section id="home" className="flex h-screen flex-col gap-10 items-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
              Simple Note-Taking,
              <br />
              <span className="text-emerald-500">Instant Sharing</span>
            </h2>
            <p className="text-xl mt-6 max-w-md mx-auto text-zinc-900 dark:text-zinc-300 md:max-w-3xl">
              Create, edit, and share notes instantly without any account. Your
              ideas, available anywhere, anytime.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button
                  variant="outline"
                  className="bg-emerald-500 text-white py-6 font-semibold"
                  onClick={handleCreateNote}
                >
                  <Plus />
                  Create new Note
                </Button>
              </div>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-neutral-300 dark:bg-neutral-800 lg:w-[48vw] w-[80vw] p-6 rounded-xl shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="bg-neutral-200 dark:bg-neutral-700 p-4 rounded-lg">
                <div className="animate-pulse">
                  <div className="h-4 bg-neutral-600 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-neutral-600 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-neutral-600 rounded w-5/6"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </section>
        <section id="features" className="dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold  mb-4">
                Powerful Features, Simple Design
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need for quick note-taking and sharing, nothing
                you don&apos;t.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="dark:bg-neutral-800 bg-neutral-100 p-8 rounded-xl hover:transform hover:-translate-y-1 transition-transform duration-300">
                <div className="h-14 w-14 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Instant Sharing</h3>
                <p className="dark:text-neutral-400 text-neutral-500 ">
                  Share your notes instantly with a unique URL - no sign-up
                  required.
                </p>
              </div>
              <div className="dark:bg-neutral-800 bg-neutral-100 p-8 rounded-xl hover:transform hover:-translate-y-1 transition-transform duration-300">
                <div className="h-14 w-14 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Auto-Save</h3>
                <p className="dark:text-neutral-400 text-neutral-500 ">
                  Never lose your work with automatic saving as you type.
                </p>
              </div>
              <div className="dark:bg-neutral-800 bg-neutral-100 p-8 rounded-xl hover:transform hover:-translate-y-1 transition-transform duration-300">
                <div className="h-14 w-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Distraction-Free</h3>
                <p className="dark:text-neutral-400 text-neutral-500 ">
                  Clean, minimal interface lets you focus on what matters - your
                  content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="howItWorks" className="py-20 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInUp">
                How It Works
              </h2>
              <p className="dark:text-gray-300 text-neutral-600 animate__animated animate__fadeInUp animate__delay-1s">
                Three simple steps to get started
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-emerald-500"></div>

              <div className="relative p-6 dark:bg-neutral-800 bg-neutral-100 rounded-xl animate__animated animate__fadeInUp">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">
                    Visit &amp; Start
                  </h3>
                  <p className="dark:text-neutral-400 text-neutral-500 ">
                    Open QuickNote in your browser and start typing immediately
                    - no sign up needed
                  </p>
                  <div className="mt-6">
                    <svg
                      className="w-12 h-12 mx-auto text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative p-6 dark:bg-neutral-800 bg-neutral-100 rounded-xl animate__animated animate__fadeInUp animate__delay-1s">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">
                    Write Your Note
                  </h3>
                  <p className="dark:text-neutral-400 text-neutral-500 ">
                    Create your content with our clean and simple editor.
                    Everything saves automatically
                  </p>
                  <div className="mt-6">
                    <svg
                      className="w-12 h-12 mx-auto text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative p-6 dark:bg-neutral-800 bg-neutral-100 rounded-xl animate__animated animate__fadeInUp animate__delay-2s">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">
                    Share Instantly
                  </h3>
                  <p className="dark:text-neutral-400 text-neutral-500 ">
                    Click share and get a unique link to your note that you can
                    send to anyone
                  </p>
                  <div className="mt-6">
                    <svg
                      className="w-12 h-12 mx-auto text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 flex items-center justify-center">
            <Button
              variant="outline"
              className="bg-emerald-500 text-white py-6 px-8 font-semibold text-lg"
              onClick={handleCreateNote}
            >
              Try It Now
            </Button>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2024 ZapNote. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
