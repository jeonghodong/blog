import { PostData } from "@/app/_lib/types";

export interface SidebarProps {
  posts: PostData[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}
