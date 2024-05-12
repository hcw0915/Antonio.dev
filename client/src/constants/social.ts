import Email from "@/assets/icon/email.svg?react";
import Github from "@/assets/icon/github-mark.svg?react";
import Instagram from "@/assets/icon/instagram.svg?react";

export const SOCIAL_MEDIA = {
  github: { url: "https://github.com/hcw0915", icon: Github },
  email: { url: "mailto:love233031@gmail.com", icon: Email }, // mailto:<email>
  instagram: { url: "https://www.instagram.com/hcw0915", icon: Instagram },
};

export const SOCIAL_MEDIA_LIST = Object.values(SOCIAL_MEDIA);
