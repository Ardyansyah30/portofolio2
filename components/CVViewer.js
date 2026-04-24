'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function CVViewer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTONS */}
      <div className="flex gap-4 justify-center mt-6 flex-wrap">

        {/* DOWNLOAD */}
        <a
          href="/cv.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
        >
          Download CV
        </a>

        {/* PREVIEW */}
        <button
          onClick={() => setOpen(true)}
          className="border border-gray-600 hover:border-white px-6 py-2 rounded-lg"
        >
          Preview CV
        </button>

      </div>

      {/* MODAL */}
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-gray-900 rounded-lg w-full max-w-4xl h-[80vh] relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✕
            </button>

            {/* PDF VIEWER */}
            <iframe
              src="/cv.pdf"
              className="w-full h-full rounded-lg"
            />

          </div>
        </motion.div>
      )}
    </>
  );
}