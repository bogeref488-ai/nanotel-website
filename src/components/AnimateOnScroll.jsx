import useInView from "../hooks/useInView";

/**
 * Wrap any section with this component to animate it on scroll.
 */
export default function AnimateOnScroll({
  children,
  className = "",
  once = true,
  delay = 0, // ms
}) {
  const { ref, inView } = useInView({ once });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
