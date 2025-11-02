"use client";

import { useEffect } from "react";

export default function ReplaceHeaderLogo() {
  useEffect(() => {
    const replaceOnce = () => {
      try {
        // Find elements that exactly contain the title text and have no element children
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
        const toReplace = [] as Element[];
        let node: Element | null = walker.nextNode() as Element | null;
        while (node) {
          if (node.childElementCount === 0) {
            const txt = node.textContent?.trim();
            if (txt === "Google Colab") toReplace.push(node);
          }
          node = walker.nextNode() as Element | null;
        }

        if (toReplace.length === 0) return;

        toReplace.forEach((el) => {
          // preserve accessible name
          el.setAttribute("aria-label", "Google Colab");
          el.textContent = "";
          const img = document.createElement("img");
          img.src = "/google-colab-icon.svg";
          img.alt = "Google Colab";
          img.style.width = "28px";
          img.style.height = "28px";
          img.style.objectFit = "contain";
          el.appendChild(img);
        });
      } catch (e) {
        // ignore
      }
    };

    // Run once now
    replaceOnce();

    // Also observe DOM changes in case layout renders later
    const observer = new MutationObserver(() => {
      replaceOnce();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
