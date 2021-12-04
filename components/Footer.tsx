import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChatbubbleEllipsesOutline,
  EyeOutline,
  HeartOutline,
} from "react-ionicons";

const Footer = () => {
  return (
    <div>
      <div className="h-20" />

      <footer className="p-10 footer bg-base-200 text-base-content">
        <div>
          <Image
            width="50"
            height="50"
            src="/logo-rounded.png"
            alt="GodderE2D Logo"
          />

          <h2 className="text-2xl">
            <strong>GodderE2D</strong>
          </h2>

          <p>A very mysterious person...</p>

          <a
            href="https://github.com/GodderE2D/godder.xyz"
            className="footer-github-link"
            title="Go to Website GitHub"
            target="_blank"
            rel="noreferrer"
          ></a>
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
          <span className="footer-title">Latest Blog (Coming Soon)</span>

          <div className="max-w-4xl hidden" key={"Testing"}>
            <Link href={`/blog/testing`} passHref>
              <div className="grid card bg-base-300 rounded-box cursor-pointer">
                <div className="mx-6 my-6">
                  <div key={"Tag #1"} className="badge badge-success mr-2">
                    Tag #1
                  </div>
                  <div key={"Tag #2"} className="badge badge-success mr-2">
                    Tag #2
                  </div>
                  <div key={"Tag #3"} className="badge badge-success mr-2">
                    Tag #3
                  </div>

                  <div className="h-2" />

                  <h3 className="text-2xl">
                    <strong>Testing</strong>
                  </h3>

                  <p>
                    A testing blog but not really. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Debitis, officia possimus
                    asperiores, ex ratione nisi quasi pariatur veniam rem
                    repellat qui quas vitae. Harum facilis ipsum libero sed
                    tempora nam! Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Unde error autem repudiandae nihil
                    possimus cupiditate, eum saepe? Repudiandae repellat
                    recusandae, consectetur, dolore obcaecati officiis sunt
                    facere, iure impedit ratione nemo!
                  </p>

                  <small className="opacity-60">
                    Created on Monday, November 22, 2021 • Updated on Monday,
                    November 22, 2021
                  </small>

                  <div>
                    <span className="mr-2">
                      <EyeOutline cssClasses="inline mr-1" />0
                    </span>
                    <span className="mx-2">
                      <HeartOutline cssClasses="inline mr-1" />0
                    </span>
                    <span className="ml-2">
                      <ChatbubbleEllipsesOutline cssClasses="inline mr-1" />0
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <div className="h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
