function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <p>
        <a
          className={"repo-link"}
          href="https://github.com/anagmrebelo/to-do-app-frontend"
        >
          Front-end
        </a>{" "}
        and{" "}
        <a
          className={"repo-link"}
          href="https://github.com/anagmrebelo/to-do-app-backend"
        >
          Back-end
        </a>{" "}
        code
      </p>
    </footer>
  );
}

export { Footer };
