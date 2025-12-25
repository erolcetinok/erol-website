"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner site-footer__inner--stacked">
        {}
        <Link
          href="/"
          className="footer-brand footer-brand--stacked"
          scroll={true}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/icons/logo.png"
            alt="Erol Cetinok logo"
            width={42}
            height={42}
          />
          <span className="footer-brand__name">Erol Cetinok</span>
        </Link>

        {/* icons of social media sights */}
        <div className="footer-links footer-links--centered">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-link"
          >
            <Image src="/icons/linkedin.svg" alt="" width={26} height={26} />
          </a>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-link"
          >
            <Image src="/icons/github.svg" alt="" width={26} height={26} />
          </a>

          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="icon-link"
          >
            <Image src="/icons/youtube.svg" alt="" width={26} height={26} />
          </a>
        </div>

        {/* text lines*/}
        <div className="footer-lines">
          <div className="footer-line footer-line--shout">
            Erol Cetinok © {year}
          </div>

          <a
            className="footer-line footer-line--shout footer-email"
            href={`mailto:${SOCIAL_LINKS.email}`}
          >
            CONTACT @ erol (dot) cetinok (at) gmail (dot) com
          </a>
        </div>
      </div>
    </footer>
  );
}