// /src/components/headers/SubHeader.jsx - Lopullinen versio

"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useEffect, useRef } from "react";
import styles from "./SubHeader.module.css";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function SubHeader({ topCategories }) {
  const locale = useLocale();
  const navRef = useRef(null);

  // Improve desktop UX: scroll horizontally with mouse wheel if overflowed
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      // Only hijack when content actually overflows
      const isOverflowing = el.scrollWidth > el.clientWidth;
      if (!isOverflowing) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    // Drag to scroll (mouse)
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onMouseDown = (e) => {
      // Only if overflowed
      if (el.scrollWidth <= el.clientWidth) return;
      isDown = true;
      startX = e.pageX;
      startScroll = el.scrollLeft;
      el.classList.add(styles.grabbing);
    };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const dx = e.pageX - startX;
      el.scrollLeft = startScroll - dx;
    };
    const endMouse = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove(styles.grabbing);
    };
    el.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: false });
    window.addEventListener("mouseup", endMouse, { passive: true });
    el.addEventListener("mouseleave", endMouse, { passive: true });

    // Touch swipe
    let tStartX = 0;
    let tStartScroll = 0;
    const onTouchStart = (e) => {
      if (el.scrollWidth <= el.clientWidth) return;
      const touch = e.touches[0];
      tStartX = touch.pageX;
      tStartScroll = el.scrollLeft;
    };
    const onTouchMove = (e) => {
      // Only when overflowed
      if (el.scrollWidth <= el.clientWidth) return;
      const touch = e.touches[0];
      const dx = touch.pageX - tStartX;
      if (Math.abs(dx) > 0) {
        e.preventDefault();
        el.scrollLeft = tStartScroll - dx;
      }
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", endMouse);
      el.removeEventListener("mouseleave", endMouse);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <header className={styles.subheader}>
      <nav ref={navRef} className={styles.nav}>
        {topCategories && topCategories.length > 0 ? (
          topCategories.map((category) => (
            <Link 
              key={category.id} 
              href={`/?category=${category.slug}`}
              className={styles.category}
            >
              {`${capitalize(category.slug)} (${category.count})`}
            </Link>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </nav>
    </header>
  );
}