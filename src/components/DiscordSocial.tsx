"use client";

import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { SiDiscord } from "react-icons/si";

const STATUS_MAP = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
  unknown: "Unknown",
};

export default function DiscordSocial() {
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState<keyof typeof STATUS_MAP>();

  useEffect(() => {
    fetch(`https://api.lanyard.rest/v1/users/972742287291449365`)
      .then((response) => response.json())
      .then(({ data }) => setStatus(data.discord_status));
  }, [status]);

  return (
    <>
      <button
        className="flex items-center gap-2 hover:underline"
        onClick={() => setOpenModal(true)}
        aria-label="Discord"
      >
        <SiDiscord className="h-5 w-5" />
        <span>Discord</span>
        <span
          className={`h-2 w-2 rounded-full ${
            status === "online"
              ? "bg-green-500"
              : status === "idle"
              ? "bg-amber-500"
              : status === "dnd"
              ? "bg-red-500"
              : "bg-zinc-500"
          }`}
        />
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="border-gray-600 bg-gray-700 hover:[&>button]:bg-gray-600 hover:[&>button]:text-white">
          <div className="mt-1 flex items-center justify-center gap-2 text-white">
            <SiDiscord className="h-5 w-5" />
            <span>Discord</span>
            <span className="flex items-center gap-1">
              <span
                className={`h-2 w-2 rounded-full ${
                  status === "online"
                    ? "bg-green-500"
                    : status === "idle"
                    ? "bg-amber-500"
                    : status === "dnd"
                    ? "bg-red-500"
                    : "bg-zinc-500"
                }`}
              ></span>
              <span className="mt-px text-xs font-medium">{STATUS_MAP[status ?? "unknown"]}</span>
            </span>
          </div>
        </Modal.Header>
        <Modal.Body className="bg-gray-700">
          <div className="prose prose-invert text-inherit">
            Discord is by far the platform I&apos;m most active on and is my preferred method of contact online.
            <br />
            <br />
            You can find me most active in the following servers as <strong>@thee2d</strong>:
            <ul>
              <li>
                <a href="https://discord.gg/R2FDvcPXTK" target="_blank" rel="noopener noreferrer">
                  Blue Shark River (my server)
                </a>
              </li>
              <li>
                <a href="https://discord.gg/djs" target="_blank" rel="noopener noreferrer">
                  discord.js
                </a>
              </li>
              <li>
                <a href="https://discord.gg/CaAE5chHXX" target="_blank" rel="noopener noreferrer">
                  Tristan&apos;s Café
                </a>
              </li>
              <li>
                <a href="https://discord.gg/BmNGZW2" target="_blank" rel="noopener noreferrer">
                  Y0ken&apos;s Domain
                </a>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
