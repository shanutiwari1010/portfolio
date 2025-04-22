import { SOCIAL_URLS } from "@/constants";
import { Github, Linkedin, Mail, X } from "lucide-react";

export const SOCIAL_LINKS_DATA = [
  {
    href: SOCIAL_URLS.linkedin,
    label: "LinkedIn",
    key: "linkedin",
    icon: Linkedin,
  },
  { href: SOCIAL_URLS.github, label: "GitHub", key: "github", icon: Github },
  { href: SOCIAL_URLS.twitter, label: "Twitter", key: "twitter", icon: X },
  { href: SOCIAL_URLS.mail, label: "Email", key: "mail", icon: Mail },
];
