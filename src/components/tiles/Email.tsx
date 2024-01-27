"use client";

import { useState } from "react";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { Modal } from "flowbite-react";

export default function Email() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="group col-span-1 row-span-2 cursor-pointer rounded-xl bg-sky-950 p-6 shadow transition-all duration-500 hover:scale-95 md:p-8"
        onClick={() => setOpenModal(true)}
        aria-label="Email"
      >
        <div className="flex h-full items-center justify-center">
          <HiOutlineMail className="h-12 w-12 transition-all duration-500 ease-out group-hover:h-16 group-hover:w-16 group-hover:animate-pulse" />
        </div>
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="rounded-t-md border-gray-600 bg-gray-700 hover:[&>button]:bg-gray-600 hover:[&>button]:text-white">
          <div className="mt-1 flex items-center justify-center gap-2 text-white">
            <HiMail className="h-5 w-5" />
            <span>Email</span>
          </div>
        </Modal.Header>
        <Modal.Body className="rounded-b-md bg-gray-700">
          <div className="prose prose-invert text-inherit">
            If you wish to contact me through e-mail for some reason, well here it is:
            <ul>
              <li>
                <a href="mailto:main@godder.xyz" target="_blank" rel="noopener noreferrer">
                  main@godder.xyz
                </a>
              </li>
              <li>
                <a href="mailto:goddere2d@bsr.gg" target="_blank" rel="noopener noreferrer">
                  goddere2d@bsr.gg
                </a>
              </li>
              <li>
                <a href="mailto:godderseesyou@gmail.com" target="_blank" rel="noopener noreferrer">
                  godderseesyou@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:e2dbusiness@outlook.com" target="_blank" rel="noopener noreferrer">
                  e2dbusiness@outlook.com
                </a>{" "}
                (YouTube contact only)
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
