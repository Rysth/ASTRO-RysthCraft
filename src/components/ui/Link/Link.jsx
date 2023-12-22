function Link({
  route,
  classVariant,
  children = undefined,
  target = "_blank",
}) {
  return (
    <a
      href={route}
      target={target}
      rel="noopener noreferrer"
      class={`flex items-center justify-center gap-2  ${classVariant}`}
    >
      {children}
    </a>
  );
}

export default Link;
