import React, { useState, Fragment } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";

import Button from "components/Button";

// Icon
import { MdClose } from "react-icons/md";
import { HiPlay } from "react-icons/hi";

export default function VideoModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeDialog() {
    setIsOpen(false);
  }

  function openDialog() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Tlačítko pro otevření */}
      <Button
        as="button"
        type="button"
        onClick={openDialog}
        className="mt-12"
        IconLeft={<HiPlay />}
      >
        Přehrát video
      </Button>

      {/* Samotný modal */}
      <Transition show={isOpen} as={Fragment}>
        <HeadlessDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 w-screen h-screen z-[200]"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-default duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-default duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay */}
            <HeadlessDialog.Overlay className="fixed inset-0 w-screen h-screen bg-gray-950 backdrop-blur-md bg-opacity-80 z-[200]" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-default duration-400"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition ease-default duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {/* Obsah modalu - container pro obrázek */}
            <div className="w-[90%] max-w-4xl mx-auto relative z-[200] top-1/2 bottom-1/2 transform -translate-y-1/2">
              <div className="aspect-[16/9]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/y2x-OpPe6Hc"
                  title="YouTube video player"
                  frameBorder="0"
                  className="w-full h-full bg-gray-400"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-default duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-default duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Tlačítko pro zavření (křížek) */}
            <button
              type="button"
              onClick={closeDialog}
              className="fixed top-6 right-6 text-4xl text-white p-2 bg-transparent hover:bg-white focus:bg-white hover:bg-opacity-15 focus:bg-opacity-15 transition-colors duration-default rounded-default z-[210]"
            >
              <span className="sr-only">Zavřít</span>
              <MdClose />
            </button>
          </Transition.Child>
        </HeadlessDialog>
      </Transition>
    </>
  );
}
