import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InformationCircleOutline } from "react-ionicons";

const Footer = () => {
  return (
    <div>
      <div className="h-20" />

      <footer className="p-10 footer bg-base-200 text-base-content">
        <div>
          <Image width="50" height="50" src="/logo.png" alt="GodderE2D Logo" />

          <h2 className="text-2xl">
            <strong>GodderE2D</strong>
          </h2>

          <p>A very mysterious person...</p>
        </div>
        <div>
          <span className="footer-title">Pages</span>

          <div className="link link-hover">
            <Link href="/">Home</Link>
          </div>

          <div className="link link-hover">
            <Link href="/resources">Resources</Link>
          </div>

          <div className="link link-hover">
            <a
              href="https://dsc.bio/godder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bio
            </a>
          </div>

          <div className="link link-hover">
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Custom Status</span>

          <div>
            <span className="text-5xl opacity-60">
              <strong>“</strong>
            </span>

            <span className="mx-4">
              Someday this will actually be something, but that day is not
              today.
            </span>

            <span className="text-5xl opacity-60">
              <strong>”</strong>
            </span>
          </div>

          <div className="h-1.5" />

          <div className="opacity-60">
            <em className="inline">— GodderE2D</em>

            <div
              data-tip="
                You found my custom status! This changes periodically, and take everything I say with a grain of salt 🧂
              "
              className="tooltip tooltip-info tooltip-right"
            >
              <InformationCircleOutline
                cssClasses="inline ml-2"
                color="#2194f3"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
