"use client";

import { useEffect, useState } from "react";
import { ResponseData } from "../app/api/check-ip/route";
import { FaCircleInfo } from "react-icons/fa6";
import { Modal } from "flowbite-react";

export default function IRLAlert() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    fetch("/api/check-ip", { next: { revalidate: 3600 } })
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return data?.triggered && data.result ? (
    <>
      <div className="fixed inset-x-0 left-0 right-0 top-0 mx-auto">
        <div className="flex items-center justify-center gap-2 bg-amber-600 bg-opacity-90 px-4 py-2 text-sm text-zinc-300">
          <span className="text-left">Please be considerate of my online privacy if you know me in-person 😇</span>
          <span
            onClick={() => setOpenModal(true)}
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full hover:bg-amber-700"
          >
            <FaCircleInfo className="h-4 w-4" />
          </span>
        </div>
      </div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="rounded-t-md border-gray-600 bg-gray-700 hover:[&>button]:bg-gray-600 hover:[&>button]:text-white">
          <div className="mt-1 flex items-center justify-center gap-2 text-white">
            <FaCircleInfo className="h-5 w-5" />
            <span>Disclaimer</span>
          </div>
        </Modal.Header>
        <Modal.Body className="rounded-b-md bg-gray-700">
          <p className="mb-2">
            Your IP address indicates that you are connected to a network associated with my school.
          </p>
          <p className="mb-6">
            If you know me in-person, please be considerate of my online privacy and do not share any personal
            information about me that I haven&apos;t made public without my consent.
          </p>
          <p>Your IP address: {data.result.ip}</p>
          <p className="mb-2">Your ISP organisation: {data.result.connection.org}</p>
          <p className="text-sm text-zinc-400">Godder.xyz does not track or log your IP address.</p>
        </Modal.Body>
      </Modal>
    </>
  ) : null;
}
