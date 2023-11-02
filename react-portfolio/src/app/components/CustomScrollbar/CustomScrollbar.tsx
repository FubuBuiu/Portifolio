import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const SCROLL_THUMB_MIN_HEIGHT = 20;

export function CustomScrollbar({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const [scrollThumbHeight, setScrollThumbHeight] = useState(
    SCROLL_THUMB_MIN_HEIGHT
  );
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);

  function handleThumbResize() {
    if (contentRef.current) {
      const scrollHostElement = contentRef.current;
      const { clientHeight, scrollHeight } = scrollHostElement;
      const scrollThumbPercentage = clientHeight / scrollHeight;
      const thumbHeight = Math.max(
        scrollThumbPercentage * clientHeight,
        SCROLL_THUMB_MIN_HEIGHT
      );
      setScrollThumbHeight(thumbHeight);
    }
  }

  const handleDocumentMouseUp = useCallback(
    (e: any) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
    },
    [isDragging]
  );

  const handleDocumentMouseMove = useCallback(
    (e: any) => {
      if (isDragging && contentRef.current) {
        e.preventDefault();
        e.stopPropagation();
        const scrollHostElement = contentRef.current;
        const { scrollHeight, offsetHeight } = scrollHostElement;

        let deltaY = e.clientY - lastScrollThumbPosition;
        let percentage = deltaY * (scrollHeight / offsetHeight);

        setScrollThumbPosition(e.clientY);
        setScrollBoxTop(
          Math.min(
            Math.max(0, scrollBoxTop + deltaY),
            offsetHeight - scrollThumbHeight
          )
        );
        scrollHostElement.scrollTop = Math.min(
          scrollHostElement.scrollTop + percentage,
          scrollHeight - offsetHeight
        );
      }
    },
    [isDragging, lastScrollThumbPosition, scrollThumbHeight, scrollBoxTop]
  );

  const handleScrollThumbMouseDown = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setDragging(true);
  }, []);

  const handleScroll = useCallback(() => {
    if (contentRef.current) {
      if (!contentRef) {
        return;
      }
      const { scrollTop, scrollHeight, offsetHeight } = contentRef.current;

      let newTop =
        (parseInt(scrollTop.toString(), 10) /
          parseInt(scrollHeight.toString(), 10)) *
        offsetHeight;
      newTop = Math.min(newTop, offsetHeight - scrollThumbHeight);
      setScrollBoxTop(newTop);
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const scrollHostElement = contentRef.current;
      const { clientHeight, scrollHeight } = scrollHostElement;
      const scrollThumbPercentage = clientHeight / scrollHeight;
      const thumbHeight = Math.max(
        scrollThumbPercentage * clientHeight,
        SCROLL_THUMB_MIN_HEIGHT
      );
      setScrollThumbHeight(thumbHeight);
      scrollHostElement.addEventListener("scroll", handleScroll, true);
      return () => {
        scrollHostElement.removeEventListener("scroll", handleScroll, true);
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleThumbResize);
    //this is handle the dragging on scroll-thumb
    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("mouseup", handleDocumentMouseUp);
    document.addEventListener("mouseleave", handleDocumentMouseUp);
    return function cleanup() {
      window.removeEventListener("resize", handleThumbResize);
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("mouseup", handleDocumentMouseUp);
      document.removeEventListener("mouseleave", handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return (
    <div ref={contentRef} className={styles.content}>
      {children}
      <div className={styles.scrollbar}>
        <div className={styles.scrollTrack}>
          <div
            ref={scrollThumbRef}
            className={styles.scrollThumb}
            style={{ height: scrollThumbHeight, top: scrollBoxTop }}
            onMouseDown={handleScrollThumbMouseDown}
          ></div>
        </div>
      </div>
    </div>
  );
}
