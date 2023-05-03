import { Stack } from "@chakra-ui/react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Post } from "../atoms/postsAtom";
import CreatePostLink from "../components/Community/CreatePostLink";
import PageContentLayout from "../components/Layout/PageContent";
import PostItem from "../components/Posts/PostItem";
import PostLoader from "../components/Posts/PostLoader";
import { auth, firestore } from "../firebase/clientApp";
import usePosts from "../hooks/usePosts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, loadingUser] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const {
    postStateValue,
    setPostStateValue,
    onSelectPost,
    onDeletePost,
    onVote,
  } = usePosts();

  const buildUserHomeFeed = async () => {};

  const buildNoUserHomeFeed = async () => {
    setLoading(true);
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        orderBy("voteStatus", "desc"),
        limit(10)
      );

      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
  };

  const getUserPostVotes = () => {};

  useEffect(() => {
    if (!user && !loadingUser) {
      buildNoUserHomeFeed();
    }
  }, [user, loadingUser]);

  return (
    <PageContentLayout>
      <>
        <CreatePostLink />
        {loading ? (
          <PostLoader />
        ) : (
          <Stack>
            {postStateValue.posts.map((post: Post) => (
              <PostItem
                key={post.id}
                post={post}
                userIsCreator={user?.uid === post.creatorId}
                userVoteValue={
                  postStateValue.postVotes.find(
                    (vote) => vote.postId === post.id
                  )?.voteValue
                }
                onVote={onVote}
                onSelectPost={onSelectPost}
                onDeletePost={onDeletePost}
                homePage={true}
              />
            ))}
          </Stack>
        )}
      </>
      <>{/* <Recommendations/> */}</>
    </PageContentLayout>
  );
}
