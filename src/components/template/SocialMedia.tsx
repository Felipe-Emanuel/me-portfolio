import { useState } from "react";
import { GitHubIcon, LinkedinIcon } from "../icons";

export function SocialMedia() {
  const [linkeidnX, setLinkedinX] = useState(false);
  const [gitHubX, setGitHubX] = useState(false);

  function renderSocialMediaLinks() {
    return (
      <div>
        <div
          onMouseEnter={() => setLinkedinX((linkeidnX) => !linkeidnX)}
          onMouseLeave={() => setLinkedinX((linkeidnX) => !linkeidnX)}
          className={`bg-blue-700 relative w-14 lg:w-16 brightness-200 rounded-r-lg  transition-all ${
            linkeidnX ? "left-4 lg:left-8 " : "left-0"
          }`}
        >
          <a href="https://www.linkedin.com/in/felipe-emanuel-/">
            <LinkedinIcon
              className={` w-6 h-6 lg:w-8 lg:h-8 transition-all translate-x-8 `}
            />
          </a>
        </div>
        <div
          onMouseEnter={() => setGitHubX((gitHubX) => !gitHubX)}
          onMouseLeave={() => setGitHubX((gitHubX) => !gitHubX)}
          className={`bg-gray-700 relative w-14 lg:w-16 brightness-200 rounded-r-lg  transition-all ${
            gitHubX ? "left-4 lg:left-8 " : "left-0"
          }`}
        >
          <a href="https://github.com/Felipe-Emanuel">
            <GitHubIcon
              className={`bg-gray-700 w-6 h-6 lg:w-8 lg:h-8 transition-all translate-x-8 `}
            />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden absolute -left-8 md:flex flex-col justify-center z-50">
      {renderSocialMediaLinks()}
    </div>
  );
}
