import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Post = {
  id: string;
  communityId: string;
  creatorId: string;
  creatorDisplayName: string;
  title: string;
  body: string;
  numberOfComments: number;
  voteStatus: number;
  createdAt: Timestamp;
  communityImageUrl?: string;
  imageURL?: string;
};

interface PostState {
  selectedPost: Post | null;
  posts: Post[];
  // postVotes: { [key: string]: number };
}

const defaultPostState: PostState = {
  selectedPost: null,
  posts: [],
  // postVotes: {},
};

export const postState = atom<PostState>({
  key: "postsAtom",
  default: defaultPostState,
});
